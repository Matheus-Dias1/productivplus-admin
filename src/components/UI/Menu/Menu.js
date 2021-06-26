import React, { useState } from 'react';
import classes from './Menu.module.css';

const { ipcRenderer } = window.require('electron');

const Menu = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const onCloseHandler = () => {
    window.close();
  };

  const onMaximizeHandler = async () => {
    if (!isMaximized) await ipcRenderer.invoke('maximize');
    else ipcRenderer.invoke('restore');
    setIsMaximized((state) => !state);
  };

  const onMinimizeHandler = async () => {
    await ipcRenderer.invoke('minimize');
  };

  return (
    <div className={classes.menu}>
      <div className={classes.textLogo}>
        <h6>PRODUCTIV</h6>
        <h6>+</h6>
      </div>
      <span className={classes['window-actions']}>
        <button type="button" onClick={onMinimizeHandler}>
          <svg
            className={classes.windowCtrl}
            x="0px"
            y="0px"
            viewBox="0 0 10.2 1"
          >
            <rect width="10.2" height="1" />
          </svg>
        </button>
        <button type="button" onClick={onMaximizeHandler}>
          {isMaximized ? (
            <svg
              className={classes.windowCtrl}
              x="0px"
              y="0px"
              viewBox="0 0 10.2 10.1"
            >
              <path d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z" />
            </svg>
          ) : (
            <svg
              className={classes.windowCtrl}
              x="0px"
              y="0px"
              viewBox="0 0 10.2 10.1"
            >
              <path d="M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z" />
            </svg>
          )}
        </button>
        <button type="button" onClick={onCloseHandler}>
          <svg
            className={classes.windowCtrl}
            x="0px"
            y="0px"
            viewBox="0 0 10.2 10.2"
          >
            <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default Menu;
