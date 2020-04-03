import React, { useState, useEffect } from 'react';
import useEmitter from '../../hooks/useEmitter';
import { useSelector } from 'react-redux';

export default function GamePage() {
  const [word, setWord] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emitSendWord = useEmitter('sendWord');
  const words = useSelector(s => s.words);
  const socket = useSelector(s => s.socket);

  useEffect(() => {
    console.log(words);
    setSubmitted(false);
    setWord('');
  }, [words]);

  function onChangeWord(e) {
    setWord(e.target.value);
  }

  function onSubmitWord() {
    emitSendWord(word);
    setSubmitted(true);
  }

  const roundWords = words ? words[words.length - 1] : {};
  const myId = socket.id;
  const theirId = words
    ? Object.keys(roundWords).filter(e => e !== myId)[0]
    : null;

  return (
    <div>
      <h1>GAME ON</h1>
      {words && words.length > 0 ? (
        <div>
          <div>Your Last Word: {roundWords[myId]}</div>
          <div>
            Their Last Word:
            {roundWords[theirId]}
          </div>
        </div>
      ) : (
        ''
      )}
      {submitted ? (
        <div>You sent: {word} -- waiting...</div>
      ) : (
        <div>
          Enter a word: <input value={word} onChange={onChangeWord}></input>
          <button onClick={onSubmitWord}>GO!</button>
        </div>
      )}
    </div>
  );
}
