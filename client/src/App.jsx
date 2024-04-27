import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

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
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
  )
}

export default App
