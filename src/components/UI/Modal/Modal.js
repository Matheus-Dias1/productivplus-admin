import React from 'react';
import classes from './Modal.module.css';

import Card from '../Card/Card';
const Modal = ({ show, onClose, children }) => {
  return (
    <>
      {show && (
        <>
          <div className={classes['backdrop']} onClick={onClose} />
          <Card className={classes['modal']}>
            <div className={classes['modal-content']}>{children}</div>
          </Card>
        </>
      )}
    </>
  );
};

export default Modal;
