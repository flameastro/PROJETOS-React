import Input from "../components/Input"

function App() {
    return (
        <div>
            <h1>ChatBot</h1>
            <Input
                placeholder={"Send a Message to ChatBot"}
                btnText={"Send"}
            ></Input>
        </div>
    )
}

export default App
