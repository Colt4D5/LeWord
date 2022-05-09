import { useState, useEffect } from 'react'
import Game from './components/Game'
import Header from './components/Header'

function App() {
  const [solution, setSolution] = useState(null)

  useEffect( () => {
    fetch('/src/data/words.json')
      .then(res => res.json())
      .then(words => {
        const solution = words.words[Math.floor(Math.random() * words.words.length)]
        setSolution(solution)
      })
  }, [setSolution])

  return (
    <div className="App">
      <Header />
      <Game solution={ solution } />
    </div>
  )
}

export default App
