import React, { useEffect } from 'react';
import { checkToken, clearGame, setGameState } from './actions';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import useSocketSetup from './hooks/useSocketSetup';
import './App.scss';

import CountdownPage from './components/pages/countdownPage';
import GamePage from './components/pages/gamePage';
import JoinGamePage from './components/pages/joinGamePage';
import LoginPage from './components/pages/loginPage';
import MainPage from './components/pages/mainPage';
import NavBar from './components/navBar';
import NewGamePage from './components/pages/newGamePage';
import WinPage from './components/pages/winPage';

export default function App() {
  const endpoint = useSelector((s) => s.endpoint);
  const gameState = useSelector((s) => s.gameState);
  const loggedIn = !!useSelector((s) => s.userInfo);
  const token = useSelector((s) => s.token);
  const dispatch = useDispatch();
  const initSocket = useSocketSetup();

  const pages = {
    countdown: <CountdownPage></CountdownPage>,
    game: <GamePage></GamePage>,
    joinGame: <JoinGamePage></JoinGamePage>,
    main: <MainPage></MainPage>,
    newGame: <NewGamePage></NewGamePage>,
    winGame: <WinPage></WinPage>,
  };

  useEffect(() => {
    dispatch(checkToken());
    if (token) {
      const socket = io.connect(endpoint, {
        query: `token=${token}`, // why no Bearer work?  ¯\_(ツ)_/¯
      });

      socket
        .on('connect', () => {
          initSocket(socket);
          dispatch(clearGame());
          dispatch(setGameState('main'));
        })
        .on('unauthorized', (msg) => {
          console.log(`unauthorized: ${JSON.stringify(msg.data)}`);
        });
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const gamePage = loggedIn ? pages[gameState] : <LoginPage></LoginPage>;
  console.log('GAME STATE', gameState);
  return (
    <>
      <NavBar></NavBar>
      <div className="content">{gamePage}</div>
    </>
  );
}
