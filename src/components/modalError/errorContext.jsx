import React, { useEffect} from 'react';
import { setErrorCallback } from '@helpers/errorService';
import ErrorModal from './errorModal';
import { useDispatch, useSelector } from 'react-redux';
import { addError, clearCurrentError, removeError, setCurrentError } from '@slices/errorSlice';

export const ErrorProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { errorQueue, currentError } = useSelector((state) => state.error);

  const showError = (message) => {
    dispatch(addError(message));
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
          key={currentError}
          message={currentError}
          isOpen={!!currentError}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};