/* eslint-disable react/prop-types */
import React, { Provider, useCallback, useState } from 'react';

const NotificationContext = React.createContext({
  notifications: [],
  clearNotification: () => {},
  addNotification: () => {},
});

// notifications structure:
//   {
//     status: 'FAILED' / 'SUCCESS',
//     message: ''
//   }

export const NotificationContextProvider = (props) => {
  const { children } = props;
  const [notifications, setNotifications] = useState([{status:'FAILED', message:'INVALID CREDENTIALS INVALID CREDENTIALS INVALID CREDENTIALS INVALID CREDENTIALS INVALID CREDENTIALS INVALID CREDENTIALS INVALID CREDENTIALS INVALID CREDENTIALS'}]);

  const clearNotification = useCallback(() => {
    console.log('clear')
    setNotifications((state) => state.slice(1, state.length));
  }, []);

  const addNotification = useCallback((notification) => {
    console.log('oiii')
    setNotifications((state) => [...state, notification]);
  }, []);

  const initValue = {
    notifications,
    clearNotification,
    addNotification
  };

  return (
    <NotificationContext.Provider value={initValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
