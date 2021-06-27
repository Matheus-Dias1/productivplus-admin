import React from 'react';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={classes['error-area']}>
      <p>{props.message}</p>
      <button onClick={props.closeError} className={classes.closeErrorBtn}>
        <svg
          className={classes.errorCtrl}
          x="0px"
          y="0px"
          viewBox="0 0 10.2 10.2"
        >
          <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
        </svg>
      </button>
    </div>
  );
};

export default ErrorModal;
