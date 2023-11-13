import { useState } from 'react'
import './App.css'
import Chicken from './Chicken.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Chicken/>
        </div>
    </>
  )
}

export default App
