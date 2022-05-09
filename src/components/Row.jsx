import React from 'react'

const Row = ({ guess, currentGuess }) => {
  console.log(guess)

  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={`letter ${l.color}`}>{l.letter}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="letter filled">{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((_,i) => (
          <div key={i} className="letter"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="row">
      <div className="letter"></div>
      <div className="letter"></div>
      <div className="letter"></div>
      <div className="letter"></div>
      <div className="letter"></div>
    </div>
  )
}

export default Row