import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import PageMain from './components/pageMain';

export default function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
         <Route exact path="/">
           <PageMain></PageMain>
         </Route>
       </Switch>
    </Router>
  );
}
