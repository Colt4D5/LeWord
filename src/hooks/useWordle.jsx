import { useState } from 'react';

const useWordle = solution => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [prevGuesses, setPrevGuesses] = useState([])
  const [history, setHistory] = useState([...Array().fill(6)])
  const [isCorrect, setIsCorrect] = useState(false)

  const handleKeyup = e => {
    // submit guess
    if (e.key === 'Enter') {
      if (history.includes(currentGuess)) return console.log(`You've already tried ${currentGuess}.`)
      submitGuess()
    }

    // backspace
    if (e.key === 'Backspace') setCurrentGuess( prev => prev.slice(0, -1))

    // update current guess if letter key
    if (!/^[A-Za-z]$/.test(e.key)) return
    if (currentGuess.length >= 5) return
    setCurrentGuess( prev => prev += e.key)
  }

  const submitGuess = () => {
    if (currentGuess.length !== 5) return console.log('Your guess needs to be 5 letters long')
    // console.log(`Submitted ${currentGuess.toUpperCase()}`)

    setHistory( prev => [...prev, currentGuess])
    
    const solutionArr = solution.split('')
    const guessObj = [...currentGuess].map((l, i) => {
      return {
        letter: l,
        id: i,
        color: 'gray'
      }
    })
    // console.log(solutionArr)
    // console.log(guessObj)
    const isGreen = guessObj.map((l, i) => {
      if (l.letter === solutionArr[i]) {
        l.color = 'green'
        solutionArr[i] = '_'
      }
      return l
    })
    
    const isYellow = isGreen.map( (l, i) => {
      if (solutionArr.includes(l.letter) && l.color !== 'green') {
        l.color = 'yellow'
      }
      return l
    })
    
    console.log(history)
  }

  return { turn, currentGuess, handleKeyup }

}

export default useWordle;