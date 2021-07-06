import React, { useContext, useEffect, useState } from 'react';
import classes from './NotificationModal.module.css';

import NotificationContext from '../../../context/notification-context';

const NotificationModal = () => {
  const notiCtx = useContext(NotificationContext);
  const [badgeClasses, setBagdeClasses] = useState('');
  const { status, message } = notiCtx.notifications[0]
    ? notiCtx.notifications[0]
    : { status: null, message: null };

  const amount = notiCtx.notifications.length;

  useEffect(() => {
    setBagdeClasses(`${classes['notification-badge']} ${classes['bump']}`);
    setTimeout(() => {
      setBagdeClasses(classes['notification-badge']);
    }, 200);
  }, [notiCtx.notifications.length]);

  return (
    <>
      {notiCtx.notifications.length > 0 && (
        <div className={classes['error-area']}>
          <div
            className={classes['status-indicator']}
            style={{
              backgroundColor: status === 'FAILED' ? '#d41c1c' : '#088c08',
            }}
          >
            &nbsp;
          </div>
            <div className={classes['error-content']}>
              <p>{message}</p>
            </div>
          <div className={classes['error-actions']}>
            <button
              type="button"
              onClick={notiCtx.clearNotification}
              className={classes.closeErrorBtn}
            >
              <svg
                className={classes.errorCtrl}
                x="0px"
                y="0px"
                viewBox="0 0 10.2 10.2"
              >
                <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
              </svg>
            </button>
            {notiCtx.notifications.length > 1 && (
              <div
                className={badgeClasses}
                style={{
                  backgroundColor: status === 'FAILED' ? '#d41c1c' : '#088c08',
                }}
              >
                <p>{notiCtx.notifications.length}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationModal;
