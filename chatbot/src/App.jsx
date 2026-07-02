import Input from "./components/Input"

function App() {
    return (
        <main>
            <h1>ChatBot</h1>
            <details>
                <summary>Rules</summary>
                <p>What you can ask: </p>
                <ul>
                    <li>Simple messages like hi/hello/wassup, thanks, bye, ...</li>
                    <li>The todays date</li>
                    <li>Roll a dice</li>
                    <li>Flip a coin</li>
                </ul>
            </details>

            <Input
                placeholder={"Send a Message to ChatBot"}
                btnText={"Send"}
            ></Input>
        </main>
    )
}

export default App
