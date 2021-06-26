import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Menu from './components/UI/Menu/Menu';
import Container from './components/UI/Container/Container';
import AuthContext from './context/auth-context';

import Login from './pages/Login/Login';

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Menu />
      <Container>
        <Router>
          <Switch>
            {authCtx.isLoggedIn && <p>oi</p>}
            {!authCtx.isLoggedIn && <Route path="*" component={Login} />}
          </Switch>
        </Router>
      </Container>
    </>
  );
}
