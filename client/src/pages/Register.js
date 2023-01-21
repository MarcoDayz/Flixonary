import { useState } from "react";

const Register = () => {
    const [checked, setChecked] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(username === '' ||
            email === '' ||
            password === ''){
                return console.log('Form needs to be filled out')
        }else if(!checked) return console.log('Box needs to be checked before submitting')

        return console.log('send')
    }

    const handleCheckbox = (e) => {
        setChecked(e.target.checked)
    }

    const handleInputs = (e) => {
        if(e.target.name === 'password'){
            setPassword(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else{
            setUsername(e.target.value)

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
                    type={'text'}
                    autoComplete={'off'}
                    onChange={handleInputs}/>
                </div>
                <div className="reg-InputContainers">
                    <label>Email </label>
                    <input
                    name="email"
                    className="inputBox"
                    type={'email'}
                    autoComplete={'off'}
                    onChange={handleInputs}/>
                </div>
                <div className="reg-InputContainers">
                    <label>Password </label>
                    <input
                    name="password"
                    className="inputBox"
                    type={'password'}
                    autoComplete={'off'}
                    onChange={handleInputs}/>
                </div>
                <div className="subscribeContainer">
                    <label>By checking this box you agree with the terms and conditions on this site.</label>
                    <div>
                        <input
                        style={registerStyle.checkbox}
                        onChange={handleCheckbox}
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