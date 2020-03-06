import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import PageMain from './components/pageMain';
import socketIOClient from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { setSocket } from './dux';

export default function App() {
  const dispatch = useDispatch();
  const endpoint = useSelector(store => store.endpoint);

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on('message', data => console.log(data));
    dispatch(setSocket(socket));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
