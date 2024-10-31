import React from 'react'
import "./InformationPopUp.css";

interface InformationPopUpProps {
    message: string;
    // onClose: () => void;
}

const InformationPopUp = ({ message }: InformationPopUpProps)=> {
  return (
    <div className="tooltip">
        {message}
    </div>
  )
}

export default InformationPopUp