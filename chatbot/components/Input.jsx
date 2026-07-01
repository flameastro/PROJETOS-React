import { useState } from "react";
import Message from "./Message.jsx";

function Input({ placeholder, btnText }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");

    function handleInput(value) {
        setText(value);
    }

    function hasWord(message, words) {
        return words.some(word => message.includes(word));
    }

    function verifyResponse(message) {
        message = message.toLowerCase();

        let botText = "";
        let complement = "";

        if (hasWord(message, ["hi", "hello", "wassup", "hey"])) {
            botText += "Hi! ";
        }

        if (hasWord(message, ["roll", "dice"])) {
            const number = Math.floor(Math.random() * 6) + 1;
            complement = `Sure, you got ${number}`;
        } else if (hasWord(message, ["today", "date", "time"])) {
            const today = new Date();
            complement = `Today is ${today.toLocaleDateString()}`;
        } else if (hasWord(message, ["flip", "coin"])) {
            const result = Math.random() < 0.5 ? "Heads" : "Tails";
            complement = `You got ${result}`;
        } else {
            complement = "What can I help you today?";
        }

        botText += complement;

        return botText;
    }

    function sendMessage() {
        if (!text.trim()) return;

        const botResponse = verifyResponse(text);

        setMessages(prev => [
            ...prev,
            {
                user: text,
                bot: botResponse
            }
        ]);

        setText("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={(e) => handleInput(e.target.value)}
            />

            <button onClick={sendMessage}>
                {btnText}
            </button>

            {messages.map((message, index) => (
                <div key={index}>
                    <Message prompt={message.user} className={"message messageUser"} />
                    <Message prompt={message.bot} className={"message messageBot"} />
                </div>
            ))}
        </div>
    );
}

export default Input;
