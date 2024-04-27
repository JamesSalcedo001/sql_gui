import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setCount(data.count))
  }, [])

  return (
      <div className="App">
        <Routes>
          <Route path="/count" element={<h1>Count: {count} </h1>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  )
}

export default App
