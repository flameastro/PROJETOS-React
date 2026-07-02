function Message({ srcImg, prompt, className}) {
    return (
        <div className="divide">
            <img src={srcImg} alt="Avatar" />
            <p style={{display: "inline-block"}} className={className}>{prompt}</p>
        </div>
    )
}

export default Message
