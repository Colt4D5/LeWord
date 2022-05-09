import React from 'react'

const Row = ({ turn, currentGuess }) => {
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