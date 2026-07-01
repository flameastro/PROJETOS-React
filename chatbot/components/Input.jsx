function Input({ placeholder, btnText }) {
    return (
        <div>
            <input type="text" name="input" id="input" placeholder={placeholder} />
            <button>{btnText}</button>
        </div>
    )
}

export default Input
