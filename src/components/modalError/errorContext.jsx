import React, { createContext, useContext, useEffect} from 'react';
import { setErrorCallback } from '@js/errorService';
import ErrorModal from './errorModal';
import { useDispatch, useSelector } from 'react-redux';
import { addError, clearCurrentError, removeError, setCurrentError } from '@slices/errorSlice';

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

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
    <ErrorContext.Provider value={{ showError }}>
      {children}
      {currentError && (
        <ErrorModal
          key={currentError}
          message={currentError}
          isOpen={!!currentError}
          onClose={handleCloseModal}
        />
      )}
    </ErrorContext.Provider>
  );
};