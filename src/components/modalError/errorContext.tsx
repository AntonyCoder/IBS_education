import React, { useEffect } from 'react';
import { setErrorCallback } from '@helpers/errorService';
import ErrorModal from './index';
import { useDispatch } from 'react-redux';
import { addError, clearCurrentError, removeError, setCurrentError } from '@slices/errorSlice/errorSlice';
import { IErrorProviderProps } from './types';
import { useAppSelector } from '@utils/hooks';

export const ErrorProvider: React.FC<IErrorProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const { errorQueue, currentError } = useAppSelector((state) => state.error);

  const showError = (message: string) => {
    const error = new Error(message);
    dispatch(addError(error));
  }

  useEffect(() => {
    setErrorCallback(showError);
  }, [dispatch, showError]);

  useEffect(() => {
    if (!currentError && errorQueue.length > 0) {
      dispatch(setCurrentError(errorQueue[0]));
    }
  }, [dispatch, errorQueue, currentError]);

  const handleCloseModal = () => {
    dispatch(removeError());
    dispatch(clearCurrentError());
  };

  return (
    <>
      {children}
      {currentError && (
        <ErrorModal
          key={currentError.message}
          message={currentError.message}
          isOpen={!!currentError}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};