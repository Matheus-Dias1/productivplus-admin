import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Menu from './components/UI/Menu/Menu';
import Container from './components/UI/Container/Container';

import Login from './pages/Login/Login';

export default function App() {
  return (
    <>
      <Menu />
      <Container>
        <Router>
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </Container>
    </>
  );
}
