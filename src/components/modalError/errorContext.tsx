import React, { ReactNode, useEffect} from 'react';
import { setErrorCallback } from '@helpers/errorService';
import ErrorModal from './index';
import { useDispatch, useSelector } from 'react-redux';
import { addError, clearCurrentError, removeError, setCurrentError } from '@slices/errorSlice';

interface ErrorState {
  errorQueue: string[];
  currentError: string | null;
}

interface ErrorProviderProps {
  children: ReactNode;
}

interface ErrorContextType {
  showError: (message: string) => void;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const { errorQueue, currentError } = useSelector((state: {error: ErrorState}) => state.error);

  const showError = (message: string) => {
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