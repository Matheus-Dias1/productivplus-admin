import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/auth-context';

render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
