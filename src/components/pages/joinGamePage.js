import React, { useEffect } from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useState } from 'react';

export default function JoinGamePage() {
  const emitJoinGame = useEmitter('joinGame');
  const [gameId, setGameId] = useState('');

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Enter code to join game:</h1>
      <div>
        <input
          autoFocus
          type="text"
          onChange={(e) => setGameId(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              emitJoinGame(gameId);
            }
          }}
          placeholder="Enter code here"
          value={gameId}
        ></input>
      </div>

      <button
        className="pure-button button-main"
        onClick={() => emitJoinGame(gameId)}
      >
        Begin!
      </button>
    </div>
  );
}
