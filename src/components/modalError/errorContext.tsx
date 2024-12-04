import React, { ReactNode, useEffect } from 'react';
import { setErrorCallback } from '@helpers/errorService';
import ErrorModal from './index';
import { useDispatch, useSelector } from 'react-redux';
import { addError, clearCurrentError, removeError, setCurrentError } from '@slices/errorSlice';

interface Error {
  message: string;
  code?: string;
}

interface ErrorState {
  errorQueue: Error[];
  currentError: Error | null;
}

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const { errorQueue, currentError } = useSelector((state: { error: ErrorState }) => state.error);

  const showError = (message: string) => {
    const error: Error = { message }
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