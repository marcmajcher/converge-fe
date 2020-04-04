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
      <h2>HECK YEAH!</h2>
      <h1>You Converged On:</h1>
      <p className="converge-word">{words && words[words.length - 1][myId]}</p>

      <div>
        <div>
          <div className="your words">
            <h2>Your Words:</h2>
            {words &&
              words.map((e, i) => (
                <div key={i} className="word-sent">
                  {e[myId]}
                </div>
              ))}
          </div>
          <div className="their words">
            <h2>Their Words:</h2>
            {words &&
              words.map((e, i) => (
                <div key={i} className="word-sent">
                  {e[theirId]}
                </div>
              ))}
          </div>
        </div>
      </div>
      <p className="clear">Again?</p>
      <div>
        <button
          className="pure-button button-main"
          onClick={() => {
            resetEmitter();
          }}
        >
          Play Again
        </button>{' '}
      </div>
      <div>
        <button
          className="pure-button button-main"
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
