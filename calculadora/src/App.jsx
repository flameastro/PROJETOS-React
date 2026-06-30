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
        setRes((prevRes) => prevRes.slice(0, prevRes.length - 1))
    }

    return (
        <main>
            <div className="titleSection">
                <h1 className="titleText">Calculadora</h1>
            </div>

            <div className="calculatorSection">
                <button className="calculatorBtn" onClick={() => addChar("0")}>0</button>
                <button className="calculatorBtn" onClick={() => addChar("1")}>1</button>
                <button className="calculatorBtn" onClick={() => addChar("2")}>2</button>
                <button className="calculatorBtn" onClick={() => addChar("3")}>3</button>
                <button className="calculatorBtn" onClick={() => addChar("4")}>4</button>
                <button className="calculatorBtn" onClick={() => addChar("5")}>5</button>
                <button className="calculatorBtn" onClick={() => addChar("6")}>6</button>
                <button className="calculatorBtn" onClick={() => addChar("7")}>7</button>
                <button className="calculatorBtn" onClick={() => addChar("8")}>8</button>
                <button className="calculatorBtn" onClick={() => addChar("9")}>9</button>
                <button className="calculatorBtn" onClick={() => addChar(".")}>,</button>
                <button className="calculatorBtn" onClick={() => addChar("+")}>+</button>
                <button className="calculatorBtn" onClick={() => addChar("-")}>-</button>
                <button className="calculatorBtn" onClick={() => addChar("*")}>*</button>
                <button className="calculatorBtn" onClick={() => addChar("/")}>/</button>
                <button className="calculatorBtn" onClick={() => calculate(res)}>Calcular</button>
                <button className="calculatorBtn" onClick={() => clearRes()}>Limpar</button>
                <button className="calculatorBtn" onClick={() => deleteLastChar()}>Delete</button>
                <Resultado res={res}></Resultado>
            </div>
        </main>
    )
}

export default App
