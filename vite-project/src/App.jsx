import { useState } from 'react'
import './App.css'
import Chicken from './Chicken.jsx';
import Greeter from "./Greeter.jsx";
import Die from "./Die.jsx"
import ListPicker from "./ListPicker.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <ListPicker values={[1,2,3]}/>
            <ListPicker values={[a,b,c]}/>
            {/*<Greeter person="Bill" from="Colt"/>*/}
            {/*<Greeter person="Ted"/>*/}
            {/*<Greeter person="Elton"/>*/}
            {/*<Die numSides={20}/>*/}
            {/*<Die numSides={6}/>*/}
            {/*<Die numSides={10}/>*/}
        </div>
    </>
  )
}

export default App
