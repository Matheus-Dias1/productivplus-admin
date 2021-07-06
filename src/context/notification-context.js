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
  const [notifications, setNotifications] = useState([]);

  const clearNotification = useCallback(() => {
    setNotifications((state) => state.slice(1, state.length));
  }, []);

  const addNotification = useCallback((notification) => {
    setNotifications((state) => [notification, ...state]);
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
