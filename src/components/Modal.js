import React from 'react'

const Modal = ({show, onClose, children}) => {
    if(!show){
        return null;
    }
  return (
    <div className="model-overlay">
      <button className="model-close" onClick={onClose}>Close</button>
      <p className="model-p">{children}</p>
    </div>
  )
}

export default Modal