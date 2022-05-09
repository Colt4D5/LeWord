import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Row from './Row';

const Game = ({ solution }) => {
  const { turn, currentGuess, handleKeyup, guesses } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup]);

  return (
    <section id="game">
      {solution && <h2>The solution is: <span  style={{ color: 'green', textTransform: 'uppercase' }}>{ solution }</span></h2>}
      <h3>Current Guess: {currentGuess}</h3>
      <h3>turn: {turn}</h3>

      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} /> 
      })}
    </section>
  )
}

export default Game