import { useState } from "react"
import Message from "./Message.jsx"

function Input({ placeholder, btnText }) {
    let [messages, setMessages] = useState([])
    let [text, setText] = useState("")

    function handleInput(char) {
        setText(() => char)
    }

    function sendMessage() {
        setMessages((prevMessages) => [...prevMessages, text])
        console.log(messages)
    }

    return (
        <div>
            <input type="text" name="input" id="input"
                placeholder={placeholder}
                value={text}
                onChange={(event) => handleInput(event.target.value)} />
            <button onClick={() => sendMessage()}>{btnText}</button>

            {messages.map((message, id) => (
                <Message key={id} prompt={message}></Message>
            ))}
        </div>
    )
}

export default Input
