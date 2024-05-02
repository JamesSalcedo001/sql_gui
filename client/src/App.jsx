import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'




function App() {
  const [count, setCount] = useState(0)

  const sampleData = [
    {
      "id": 1,
      "name": "James",
      "age": 28
    },
    {
      "id": 2,
      "name": "Binx",
      "age": 3
    },
    {
      "id": 3,
      "name": "Tomo",
      "age": 4
    }
  ]

  useEffect(() => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setCount(data.count))
  }, [])

  return (
      <div className="App">
        <Routes>
          <Route path="/count" element={<h1>Count: {count} </h1>}/>
          <Route path="/" element={<Home sampleData={sampleData} />} />
        </Routes>
      </div>
  )
}

export default App
