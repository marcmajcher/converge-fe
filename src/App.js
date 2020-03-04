import React, { useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { actionSetUserInfo, actionSetLoading } from './reducer';
import NavBar from './components/navBar';
import PageHome from './components/pageHome';
import UserManager from './components/userManager';

export default function App() {

  return (
    <Router>
      <UserManager></UserManager>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <PageHome></PageHome>
        </Route>
      </Switch>
    </Router>
  );
}
