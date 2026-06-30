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
        setRes(() => String(res).slice(0, String(res).length - 1))
    }

    document.addEventListener('click', function() {
    if (document.activeElement) {
        document.activeElement.blur();
    }

    window.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            calculate(res)
        }
    })
});


    return (
        <main>
            <div className="titleSection">
                <h1 className="titleText">Calculadora</h1>
            </div>

            <Resultado res={res}></Resultado>


            <div className="calculatorSection">
                <button className="calculatorBtn special" onClick={() => clearRes()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brush-cleaning-icon lucide-brush-cleaning"><path d="m16 22-1-4" /><path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" /><path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" /><path d="m8 22 1-4" /></svg>
                </button>
                <button className="calculatorBtn special" onClick={() => deleteLastChar()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eraser-icon lucide-eraser"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" /><path d="m5.082 11.09 8.828 8.828" /></svg>
                </button>
                <button className="calculatorBtn" onClick={() => addChar("(")}>(</button>
                <button className="calculatorBtn" onClick={() => addChar(")")}>)</button>
                <button className="calculatorBtn" onClick={() => addChar("7")}>7</button>
                <button className="calculatorBtn" onClick={() => addChar("8")}>8</button>
                <button className="calculatorBtn" onClick={() => addChar("9")}>9</button>
                <button className="calculatorBtn operation" onClick={() => addChar("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-divide-icon lucide-divide"><circle cx="12" cy="6" r="1" /><line x1="5" x2="19" y1="12" y2="12" /><circle cx="12" cy="18" r="1" /></svg>
                </button>
                <button className="calculatorBtn" onClick={() => addChar("4")}>4</button>
                <button className="calculatorBtn" onClick={() => addChar("5")}>5</button>
                <button className="calculatorBtn" onClick={() => addChar("6")}>6</button>
                <button className="calculatorBtn operation" onClick={() => addChar("+")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </button>
                <button className="calculatorBtn" onClick={() => addChar("1")}>1</button>
                <button className="calculatorBtn" onClick={() => addChar("2")}>2</button>
                <button className="calculatorBtn" onClick={() => addChar("3")}>3</button>
                <button className="calculatorBtn operation" onClick={() => addChar("-")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14" /></svg>
                </button>
                <button className="calculatorBtn" onClick={() => addChar("0")}>0</button>
                <button className="calculatorBtn" onClick={() => addChar(".")}>,</button>
                <button className="calculatorBtn special" onClick={() => calculate(res)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator-icon lucide-calculator"><rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" /></svg>
                </button>
                <button className="calculatorBtn operation" onClick={() => addChar("*")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            </div>
        </main>
    )
}

export default App
