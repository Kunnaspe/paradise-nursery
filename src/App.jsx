import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AboutUs from './components/AboutUs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <>
      <div className="paradise-header">
        <h1>🌿 Paradise Nursery 🌿</h1>
        <p>Your One-Stop Destination for Beautiful Houseplants</p>
      </div>
      
      <div>
        <button onClick={() => setShowAbout(!showAbout)} style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}>
          {showAbout ? 'Hide About Us' : 'Show About Us'}
        </button>
      </div>
      
      {showAbout && <AboutUs />}
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
