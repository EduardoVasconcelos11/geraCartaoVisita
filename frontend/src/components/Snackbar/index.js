import React, { useEffect } from 'react';
import './index.css';

const SnackbarCustom = ({ message, severity, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Fecha automaticamente após 3 segundos

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <div className={`snackbar snackbar-${severity}`}>
        {message}
      </div>
    )
  );
};

export default SnackbarCustom;
