import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { setErrorCallback } from '../../js/errorService';
import ErrorModal from './errorModal';

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = useCallback((message) => {
    console.log('Received error message:', message);
    setErrorMessage(message);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    console.log('Setting error callback');
    setErrorCallback(showError);
  }, [showError]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      <ErrorModal message={errorMessage} isOpen={isModalOpen} onClose={closeModal} />
    </ErrorContext.Provider>
  );
};