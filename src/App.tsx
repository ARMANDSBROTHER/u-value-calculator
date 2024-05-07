import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(11)

  return (
    <>
      <div>
        <button>
          not button button button button but ton
        </button>
       </div>
      <h1>Live Laugh Love</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count * 100)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
