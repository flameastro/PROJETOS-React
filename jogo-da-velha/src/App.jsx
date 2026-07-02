import { useEffect, useState } from 'react'

function App() {
    const [c, setC] = useState(1)
    const [last, setLast] = useState("")

    const [opcoes, setOpcoes] = useState({
        "1": "",
        "2": "",
        "3": "",
        "4": "",
        "5": "",
        "6": "",
        "7": "",
        "8": "",
        "9": "",
    })

    function marcar(opcao) {
        if (!opcoes[opcao]) {
            if (c % 2 == 0) {
                setOpcoes((prev) => ({
                    ...prev,
                    [opcao]: "o",
                }))

                setLast("o")
            } else {
                setOpcoes((prev) => ({
                    ...prev,
                    [opcao]: "x",
                }))

                setLast("x")
            }

            setC((prevC) => prevC + 1)

        }
    }

    function marcarCor(div) {
        if (div.innerHTML.length == 0) {
            if (c % 2 != 0) {
                div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
                div.setAttribute("class", `${div.getAttribute("class")} x`)
            } else {
                div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>`
                div.setAttribute("class", `${div.getAttribute("class")} o`)
            }
        }
    }

    function resultadoPartida() {
        let mensagem
        let resultado = false
        const vitoria = ((opcoes[1] == "x") && (opcoes[2] == "x") && (opcoes[3] == "x")) || ((opcoes[4] == "x") && (opcoes[5] == "x") && (opcoes[6] == "x")) || ((opcoes[7] == "x") && (opcoes[8] == "x") && (opcoes[9] == "x")) || ((opcoes[1] == "x") && (opcoes[4] == "x") && (opcoes[7] == "x")) || ((opcoes[2] == "x") && (opcoes[5] == "x") && (opcoes[8] == "x")) || ((opcoes[3] == "x") && (opcoes[6] == "x") && (opcoes[9] == "x")) || ((opcoes[1] == "x") && (opcoes[5] == "x") && (opcoes[9] == "x")) || ((opcoes[3] == "x") && (opcoes[5] == "x") && (opcoes[7] == "x")) || ((opcoes[1] == "o") && (opcoes[2] == "o") && (opcoes[3] == "o")) || ((opcoes[4] == "o") && (opcoes[5] == "o") && (opcoes[6] == "o")) || ((opcoes[7] == "o") && (opcoes[8] == "o") && (opcoes[9] == "o")) || ((opcoes[1] == "o") && (opcoes[4] == "o") && (opcoes[7] == "o")) || ((opcoes[2] == "o") && (opcoes[5] == "o") && (opcoes[8] == "o")) || ((opcoes[3] == "o") && (opcoes[6] == "o") && (opcoes[9] == "o")) || ((opcoes[1] == "o") && (opcoes[5] == "o") && (opcoes[9] == "o")) || ((opcoes[3] == "o") && (opcoes[5] == "o") && (opcoes[7] == "o"))

        if (vitoria) {
            mensagem = `Jogador ${last} venceu!`
            resultado = true
        }

        let lista = []
        for (let i in opcoes) { lista.push(opcoes[`${i}`]) }

        if (lista.every((x) => x) && !vitoria) {
            mensagem = "Empate"
            resultado = true
        }

        if (resultado) {
            alert(mensagem)
            location.reload()
        }
    }

    useEffect(() => {
        setTimeout(resultadoPartida, 100)
    }, [opcoes]);

    window.addEventListener("keydown", (event) => {
        if (event.key == " ") {
            location.reload()
        }
    })

    return (
        <main>
            <h1>Jogo da Velha</h1>
            <p>Vez: {last == "x" ? "o" : "x"}</p>

            <div className="jogo">
                <div className="opcao opcao1" onClick={(event) => { marcar(1); marcarCor(event.target) }}></div>
                <div className="opcao opcao2" onClick={(event) => { marcar(2); marcarCor(event.target) }}></div>
                <div className="opcao opcao3" onClick={(event) => { marcar(3); marcarCor(event.target) }}></div>
                <div className="opcao opcao4" onClick={(event) => { marcar(4); marcarCor(event.target) }}></div>
                <div className="opcao opcao5" onClick={(event) => { marcar(5); marcarCor(event.target) }}></div>
                <div className="opcao opcao6" onClick={(event) => { marcar(6); marcarCor(event.target) }}></div>
                <div className="opcao opcao7" onClick={(event) => { marcar(7); marcarCor(event.target) }}></div>
                <div className="opcao opcao8" onClick={(event) => { marcar(8); marcarCor(event.target) }}></div>
                <div className="opcao opcao9" onClick={(event) => { marcar(9); marcarCor(event.target) }}></div>
            </div>
        </main>
    )
}

export default App
