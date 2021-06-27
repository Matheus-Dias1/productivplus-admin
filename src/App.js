import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Menu from './components/UI/Menu/Menu';
import NavBar from './components/UI/NavBar/NavBar';
import Container from './components/UI/Container/Container';
import AuthContext from './context/auth-context';

import Login from './pages/Login/Login';
import Statistics from './pages/Statistics/Statistics';
import Notifications from './pages/Notifications/Notifications';
import Email from './pages/Email/Email';
import Sugestions from './pages/Sugestions/Sugestions';
import ListUsers from './pages/ListUsers/ListUsers';

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Menu />
      <Container>
        <Router>
          <Switch>
            {authCtx.isLoggedIn &&  <NavBar>
              <Route path="/statistics" component={Statistics} />
              <Route path="/email" component={Email} />
              <Route path="/sugestions" component={Sugestions} />
              <Route path="/users" component={ListUsers} />
              <Route path="/notifications" component={Notifications} />


            </NavBar>}
            {!authCtx.isLoggedIn && <Route path="*" component={Login} />}
          </Switch>
        </Router>
      </Container>
    </>
  );
}
