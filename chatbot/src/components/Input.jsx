import { useState } from "react";
import Message from "./Message.jsx";

import botImg from "../assets/bot.svg";
import userImg from "../assets/user.svg";

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
        } else if (hasWord(message, ["thank", "ty"])) {
            complement = "No problem! I'm happy I can help you!";
        } else if (hasWord(message, ["bye"])) {
            complement = "Oh, bye! See you later!";
        } else {
            complement = "How can I help you today?";
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
        <section>
            <article className="data mb-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder={placeholder}
                    value={text}
                    onChange={(e) => handleInput(e.target.value)}
                />
                <button onClick={sendMessage} type="button" className="btn btn-primary">
                    {btnText}
                </button>
            </article>

            <article className="messages">
                {messages.map((message, index) => (
                    <div key={index}>
                        <Message srcImg={userImg} prompt={message.user} className={"message messageUser"} />
                        <Message srcImg={botImg} prompt={message.bot} className={"message messageBot"} />
                    </div>
                ))}
            </article>
        </section>
    );
}

export default Input;
