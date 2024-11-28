import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ErrorModal = ({ isOpen, message, onClose }) => {
  
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Ошибка">
      <h2>Произошла ошибка</h2>
      <p>{message}</p>
      <button onClick={onClose}>Закрыть</button>
    </Modal>
  );
};

export default ErrorModal;