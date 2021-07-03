import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ show, onClose, children }) => {
  return (
    <>
      {show && (
        <>
          <div className={classes['backdrop']} onClick={onClose} />
          <div className={classes['modal']}>
            <div className={classes['modal-content']}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
