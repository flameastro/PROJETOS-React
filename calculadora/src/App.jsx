import { useState } from 'react'
import './App.css'
import Resultado from './components/Resultado'

function App() {
    const [res, setRes] = useState("")

    function addChar(char) {
        setRes((prevRes) => prevRes + char)
    }

    return (
        <div>
            <h1>Calculadora</h1>
            <button onClick={() => addChar("0")}>0</button>
            <button onClick={() => addChar("1")}>1</button>
            <button onClick={() => addChar("2")}>2</button>
            <button onClick={() => addChar("3")}>3</button>
            <button onClick={() => addChar("4")}>4</button>
            <button onClick={() => addChar("5")}>5</button>
            <button onClick={() => addChar("6")}>6</button>
            <button onClick={() => addChar("7")}>7</button>
            <button onClick={() => addChar("8")}>8</button>
            <button onClick={() => addChar("9")}>9</button>
            <Resultado res={res}></Resultado>
        </div>
    )
}

export default App
