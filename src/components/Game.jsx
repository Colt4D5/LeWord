import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Row from './Row';

const Game = ({ solution }) => {
  const { turn, currentGuess, handleKeyup } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup]);

  return (
    <section id="game">
      {solution && <h2>The solution is: <span  style={{ color: 'green', textTransform: 'uppercase' }}>{ solution }</span></h2>}
      { currentGuess && <h3>{currentGuess}</h3>}
      <Row currentGuess={currentGuess} turn={turn} />
      <Row currentGuess={currentGuess} turn={turn} />
      <Row currentGuess={currentGuess} turn={turn} />
      <Row currentGuess={currentGuess} turn={turn} />
      <Row currentGuess={currentGuess} turn={turn} />
      <Row currentGuess={currentGuess} turn={turn} />
    </section>
  )
}

export default Game