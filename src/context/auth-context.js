/* eslint-disable react/prop-types */
import React, { Provider, useCallback, useState } from 'react';

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const { children } = props;
  const [token, setToken] = useState('');
  const isLoggedIn = !!token;

  const login = useCallback((email, pass) => {
    // logica de login
    if (email === 'a@a' && pass === '')
      setToken('token_valido');
    else
      return {
        status: 'FAILED',
        message: 'INVALID CREDENTIALS',
      };
    return {
      status: 'SUCCESS',
    };
  }, []);

  const logout = useCallback(() => {
    setToken('');
  }, []);

  const initValue = {
    token,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={initValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
