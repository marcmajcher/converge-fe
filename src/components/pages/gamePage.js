import React, { useState, useEffect } from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useSelector } from 'react-redux';

export default function GamePage() {
  const [word, setWord] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emitSendWord = useEmitter('sendWord');
  const words = useSelector((s) => s.words);
  const socket = useSelector((s) => s.socket);

  useEffect(() => {
    setSubmitted(false);
    setWord('');
  }, [words]);

  function onSubmitWord() {
    emitSendWord(word);
    setSubmitted(true);
  }

  const myId = socket.id;
  const roundWords = words ? words[words.length - 1] : {};
  const theirId = words
    ? Object.keys(roundWords).filter((e) => e !== myId)[0]
    : null;

  return (
    <div>
      {words && words.length > 0 ? (
        <div>
          <div className="your word">
            <h2>Your Last Word:</h2>
            <div className="word-sent">{roundWords[myId]}</div>
          </div>
          <div className="their word">
            <h2>Their Last Word:</h2>
            <div className="word-sent">{roundWords[theirId]}</div>
          </div>
        </div>
      ) : (
        ''
      )}
      {submitted ? (
        <div>
          <h1 className={words ? 'you-sent' : ''}>You sent: </h1>
          <p className="word-sent word-submitted">{word}</p>
          <h2>Waiting for other player...</h2>
        </div>
      ) : (
        <div>
          <h1 className="clear">Enter a word:</h1>
          <div>
            <input
              autoFocus
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onSubmitWord();
                }
              }}
            ></input>
          </div>
          <button className="pure-button button-main" onClick={onSubmitWord}>
            GO!
          </button>
        </div>
      )}
    </div>
  );
}
