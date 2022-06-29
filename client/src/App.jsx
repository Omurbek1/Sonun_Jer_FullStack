import { useState, useEffect } from 'react'



function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <p>Hello Vite + React!</p>
        <h1 color='#000'>Hello</h1>
        <p>{!data ? "Loading" : data}</p>
      </header>
    </div>
  )
}

export default App
