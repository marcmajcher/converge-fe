import React from 'react';
import { useSelector } from 'react-redux';
import useEmitter from '../../hooks/useEmitter';

export default function WinPage() {
  const socket = useSelector((s) => s.socket);
  const words = useSelector((s) => s.words);
  const resetEmitter = useEmitter('resetGame');
  const endEmitter = useEmitter('endGame');

  const myId = socket.id;
  const theirId = words
    ? Object.keys(words[0]).filter((e) => e !== myId)[0]
    : null;

  return (
    <div>
      <h1>YOU WIN!</h1>
      <div>
        Your Words / Their Words:
        <ul>
          {words &&
            words.map((e, i) => (
              <li key={i}>
                {e[myId]} / {e[theirId]}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <button onClick={() => resetEmitter()}>Play Again</button>{' '}
        <button
          onClick={() => {
            endEmitter();
          }}
        >
          Back to Main
        </button>
      </div>
    </div>
  );
}
