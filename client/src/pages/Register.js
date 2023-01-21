const Register = () => {

    const registerStyle = {
        checkbox: {
            scale: '1.5'
        }
    }

    return (
        <div className="registerMain">
            {/* <h1>Register Page</h1> */}
            <form className="registerForm">
                <div className="reg-InputContainers">
                    <label>Username </label>
                    <input
                    className="inputBox"
                    type={'text'}
                    autoComplete={'false'}/>
                </div>
                <div className="reg-InputContainers">
                    <label>Email </label>
                    <input
                    className="inputBox"
                    type={'email'}
                    autoComplete={'false'}/>
                </div>
                <div className="reg-InputContainers">
                    <label>Password </label>
                    <input
                    className="inputBox"
                    type={'password'}/>
                </div>
                <div className="subscribeContainer">
                    <label>By checking this box you agree with the terms and conditions on this site.</label>
                    <div>
                        <input
                        style={registerStyle.checkbox}
                        type={'checkbox'}/>
                    </div>
                </div>
                <div>
                    <input className='registerBtn'
                    type={'submit'}
                    value={'register'}/>
                </div>
            </form>
        </div>
    )
};

export default Register;