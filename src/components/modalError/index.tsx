import React from 'react';
import { IErrorModalProps } from '@slices/errorSlice/errorTypes';
import './errorModal.styles.scss'; 

const ErrorModal: React.FC<IErrorModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="error-item">
        <h2 className='error-title'>Произошла ошибка</h2>
        <p>{message}</p>
        <button className='error-close' onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ErrorModal;