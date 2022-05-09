import { useState } from 'react';

const useWordle = solution => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState([])
  const [isCorrect, setIsCorrect] = useState(false)

  const handleKeyup = e => {
    // submit guess
    if (e.key === 'Enter') {
      if (history.includes(currentGuess)) return console.log(`You've already tried ${currentGuess}.`)
      formatGuess()
    }

    // backspace
    if (e.key === 'Backspace') setCurrentGuess( prev => prev.slice(0, -1))

    // update current guess if letter key
    if (!/^[A-Za-z]$/.test(e.key)) return
    if (currentGuess.length >= 5) return
    setCurrentGuess( prev => prev += e.key)
  }

  const formatGuess = () => {
    if (currentGuess.length !== 5) return console.log('Your guess needs to be 5 letters long')
    // console.log(`Submitted ${currentGuess.toUpperCase()}`)
    
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
    const formattedGuess = guessObj.map((l, i) => {
      if (l.letter === solutionArr[i]) {
        l.color = 'green'
        solutionArr[i] = '_'
      } else if (solutionArr.includes(l.letter) && l.color !== 'green') {
        l.color = 'yellow'
      }
      return l
    })
    console.log(formattedGuess);

    setTurn( prev => prev + 1 )

    setHistory( prev => [...prev, currentGuess] )

    submitGuess(formattedGuess)
  }

  const submitGuess = (formattedGuess) => {
    setGuesses( prev => {
      let newGuesses = [...prev]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })
    setCurrentGuess('')

    if (currentGuess === solution) {
      return console.log(`You win! The word was ${solution}`)
    }

    if (turn > 5) {
      return console.log(`You lose... the word was ${solution}`);
    }
  }

  return { turn, currentGuess, handleKeyup, guesses }

}

export default useWordle;