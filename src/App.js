import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import PageMain from './components/pageMain';
import socketIOClient from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { setSocket, setNumber, checkToken } from './redux-actions';

export default function App() {
  const dispatch = useDispatch();
  const endpoint = useSelector(store => store.endpoint);
  const token = useSelector(store => store.token);

  useEffect(() => {
    dispatch(checkToken());
    const socket = socketIOClient(endpoint);

    socket.on('connect', () => {
      socket
        .on('authenticated', () => {
          /* do all the things */
          socket.on('number', data => dispatch(setNumber(data)));
          dispatch(setSocket(socket));
        })
        .emit('authenticate', { token });
    });
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

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
