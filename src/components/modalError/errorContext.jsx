import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { setErrorCallback } from '@js/errorService';
import ErrorModal from './errorModal';

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [errorQueue, setErrorQueue] = useState([]);
  const [currentError, setCurrentError] = useState(null);

  const showError = useCallback((message) => {
    setErrorQueue((prevQueue) => [...prevQueue, message]);
  }, []);

  useEffect(() => {
    setErrorCallback(showError);
  }, [showError]);

  useEffect(() => {
    if (!currentError && errorQueue.length > 0) {
      setCurrentError(errorQueue[0]);
    }
  }, [errorQueue, currentError]);

  const handleCloseModal = () => {
    setErrorQueue((prevQueue) => prevQueue.slice(1));
    setCurrentError(null);
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