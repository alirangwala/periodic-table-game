import React from 'react'
import './Modal.css';

interface ModalProps {
    primary_message: string;
    secondary_message: string;
    onClose: () => void;
}

const Modal = ({ primary_message, secondary_message, onClose }: ModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>{primary_message}</h1>
        <h2>Did you Know:</h2>
        <h2>{secondary_message}</h2>
        <button className = "close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Modal