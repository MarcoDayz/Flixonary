import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [checked, setChecked] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(username === '' ||
            email === '' ||
            password === ''){
                return console.log('Form needs to be filled out')
        }else if(!checked) return console.log('Box needs to be checked before submitting')

        try {
            const newAccount = {username,email,password,checked}
            const {data} = await axios.post(`http://localhost:4000/register/create`, newAccount)
            console.log(data)
            handleReset()
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleReset = () => {
        setChecked(false)
        setUsername('')
        setEmail('')
        setPassword('')
    }

    const handleInputs = (e) => {
        if(e.target.name === 'password'){
            setPassword(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'username'){
            setUsername(e.target.value)
        }else{
            setChecked(e.target.checked)
        }
    }
    

    const registerStyle = {
        checkbox: {
            scale: '1.5'
        }
    }

    return (
        <div className="registerMain">
            {/* <h1>Register Page</h1> */}
            <form className="registerForm"
            onSubmit={handleSubmit}>
                <div className="reg-InputContainers">
                    <label>Username </label>
                    <input
                    name={"username"}
                    value={username}
                    className="inputBox"
                    type={'username'}
                    autoComplete={'off'}
                    onChange={handleInputs}/>
                </div>
                <div className="reg-InputContainers">
                    <label>Email </label>
                    <input
                    name="email"
                    className="inputBox"
                    value={email}
                    type={'email'}
                    autoComplete={'off'}
                    onChange={handleInputs}/>
                </div>
                <div className="reg-InputContainers">
                    <label>Password </label>
                    <input
                    name="password"
                    className="inputBox"
                    value={password}
                    type={'password'}
                    autoComplete={'off'}
                    onChange={handleInputs}/>
                </div>
                <div className="subscribeContainer">
                    <label>By checking this box you agree with the terms and conditions on this site.</label>
                    <div>
                        <input
                        style={registerStyle.checkbox}
                        checked={checked}
                        onChange={handleInputs}
                        type={'checkbox'}/>
                    </div>
                </div>
                <div>
                    <input className='registerBtn'
                    type={'submit'}
                    value={'Register'}/>
                </div>
            </form>
        </div>
    )
};

export default Register;