import Input from "../components/Input"
import Message from "../components/Message"

function App() {
    return (
        <div>
            <h1>ChatBot</h1>
            <Input placeholder={"Send a Message to ChatBot"} btnText={"Send"}></Input>
            <Message prompt={"test"}></Message>
        </div>
    )
}

export default App
