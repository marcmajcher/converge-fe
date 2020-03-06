import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import PageMain from './components/pageMain';
import socketIOClient from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { setSocket, setNumber, checkToken } from './dux';

export default function App() {
  const dispatch = useDispatch();
  const endpoint = useSelector(store => store.endpoint);

  /*
  var token = sessionStorage.token;
  var socket = io.connect('http://localhost:3000');
  socket.on('connect', function (socket) {
    socket
      .on('authenticated', function () {
        //do other things
      })
      .emit('authenticate', {token: token}); //send the jwt
  });
*/

  useEffect(() => {
    dispatch(checkToken());
    const socket = socketIOClient(endpoint);
    socket.on('number', data => dispatch(setNumber(data)));
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
