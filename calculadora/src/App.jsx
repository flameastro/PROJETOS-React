import './App.css'
import { useState } from 'react'

import Resultado from './components/Resultado'

function App() {
    const [res, setRes] = useState("")

    function addChar(char) {
        if (res == "Erro") {
            setRes(() => "")
        }

        setRes((prevRes) => prevRes + char)
    }

    function calculate(res) {
        try {
            if (res != "" && res.length > 0) {
                const result = eval(res)
                setRes(() => result)
            }
        } catch {
            setRes(() => "Erro")
        }
    }

    function clearRes() {
        setRes(() => "")
    }

    function deleteLastChar() {
        setRes((prevRes) => prevRes.slice(0, prevRes.length-1))
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
            <button onClick={() => addChar(".")}>,</button>
            <button onClick={() => addChar("+")}>+</button>
            <button onClick={() => addChar("-")}>-</button>
            <button onClick={() => addChar("*")}>*</button>
            <button onClick={() => addChar("/")}>/</button>
            <button onClick={() => calculate(res)}>Calcular</button>
            <button onClick={() => clearRes()}>Limpar</button>
            <button onClick={() => deleteLastChar()}>Delete</button>
            <Resultado res={res}></Resultado>
        </div>
    )
}

export default App
