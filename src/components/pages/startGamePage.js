import React from 'react';
import useEmitter from '../../hooks/useEmitter'

export default function StartGamePage() {
  const emitStartGame = useEmitter('startNewGame')

  emitStartGame()
  return <h1>START NEW GAME</h1>;
}