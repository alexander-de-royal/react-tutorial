import { useState } from 'react'
import './App.css'
import Chicken from './Chicken.jsx';
import Greeter from "./Greeter.jsx";
import Die from "./Die.jsx"
import ListPicker from "./ListPicker.jsx";
import shoppingList from "./ShoppingList.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Clicker from "./Clicker.jsx";

const data = [
    {item: 'eggs', quantity: 12, completed: false},
    {item: 'milk', quantity: 1, completed: true},
    {item: 'chicken', quantity: 4, completed: false},
    {item: 'carrots', quantity: 6, completed: true}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <Clicker/>
            {/*<ShoppingList items={data}/>*/}
            {/*<ListPicker values={[1,2,3]}/>*/}
            {/*<ListPicker values={[a,b,c]}/>*/}
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
