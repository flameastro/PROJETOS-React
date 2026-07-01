function Message({ prompt, className}) {
    return (
        <div>
            <p className={className}>{prompt}</p>
        </div>
    )
}

export default Message
