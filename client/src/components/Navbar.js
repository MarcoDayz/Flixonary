import { useState } from "react";

const Navbar = () => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                borderBottom: 'solid black 2px'}}>
            <h1>StackFlix</h1>
            <form onSubmit={handleSubmit}>
                <input
                    style={{width: '20rem'}}
                    type={'text'}
                    value={input}
                    onChange={handleChange} />
                <input type={'submit'} />
            </form>
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'}}>
                <button>Join Now</button>
                <button>Login</button>  
            </div>
        </div>
    )
};

export default Navbar;