import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/auth-context';
import { NotificationContextProvider } from './context/notification-context';

render(
  <AuthContextProvider>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);
