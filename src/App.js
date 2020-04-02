import React, { useEffect } from 'react';
import './App.scss';
import io from 'socket.io-client';
import { checkToken } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import useSocketSetup from './hooks/useSocketSetup';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import NavBar from './components/navBar';
import CountdownPage from './components/pages/countdownPage';
import GamePage from './components/pages/gamePage';
import JoinGamePage from './components/pages/joinGamePage';
import LoginPage from './components/pages/loginPage';
import MainPage from './components/pages/mainPage';
import NewGamePage from './components/pages/startGamePage';

export default function App() {
  const endpoint = useSelector(s => s.endpoint);
  const dispatch = useDispatch();
  const token = useSelector(s => s.token);
  const initSocket = useSocketSetup();

  useEffect(() => {
    dispatch(checkToken());
    if (token) {
      const socket = io.connect(endpoint, {
        query: `token=${token}`, // why no Bearer work?  ¯\_(ツ)_/¯
      });

      socket
        .on('connect', () => {
          initSocket(socket);
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
        <Switch>
          <Route exact path="/login">
            <LoginPage></LoginPage>
          </Route>
          <AuthRoute exact path="/">
            <MainPage></MainPage>
          </AuthRoute>
          <AuthRoute exact path="/new">
            <NewGamePage></NewGamePage>
          </AuthRoute>
          <AuthRoute exact path="/join">
            <JoinGamePage></JoinGamePage>
          </AuthRoute>
          <AuthRoute exact path="/cd">
            <CountdownPage></CountdownPage>
          </AuthRoute>
          <AuthRoute exact path="/game">
            <GamePage></GamePage>
          </AuthRoute>
        </Switch>
      </div>
    </Router>
  );
}

function AuthRoute({ children, ...rest }) {
  const loggedIn = !!useSelector(s => s.userInfo);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
