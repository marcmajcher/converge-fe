import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import LoginPage from './components/pages/loginPage';
import MainPage from './components/pages/mainPage';
import NewGamePage from './components/pages/startGamePage';
import JoinGamePage from './components/pages/joinGamePage';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { setSocket, setNumber, checkToken } from './actions';

export default function App() {
  const endpoint = useSelector(store => store.endpoint);
  const dispatch = useDispatch();
  const loggedIn = !!useSelector(store => store.userInfo);
  const token = useSelector(store => store.token);

  useEffect(() => {
    dispatch(checkToken());
    if (token) {
      const socket = io.connect(endpoint, {
        query: `token=${token}`, // why no Bearer work?  ¯\_(ツ)_/¯
      });

      socket
        .on('connect', () => {
          /* do all the things */
          socket.on('number', data => dispatch(setNumber(data)));
          socket.on('info', message => console.info(message));

          dispatch(setSocket(socket));
        })
        .on('unauthorized', msg => {
          console.log(`unauthorized: ${JSON.stringify(msg.data)}`);
          throw new Error(msg.data.type);
        });
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <NavBar></NavBar>
      <div className="content">
        {loggedIn ? (
          <Switch>
            <Route exact path="/">
              <MainPage></MainPage>
            </Route>
            <Route exact path="/new">
              <NewGamePage></NewGamePage>
            </Route>
            <Route exact path="/join">
              <JoinGamePage></JoinGamePage>
            </Route>
          </Switch>
        ) : (
          <LoginPage></LoginPage>
        )}
      </div>
    </Router>
  );
}
