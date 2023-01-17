const Register = () => {

    const registerStyle = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '8rem',
            marginBottom: '2rem'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60rem',
            gap: '1rem',
            borderRadius: '1rem',
            padding: '2rem',
            backgroundColor: 'rgb(0 0 0 / 35%',
        },
        inputDivs: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '26rem'

        },
        inputElem: {
            width: '25rem',
            height: '3rem',
            borderRadius: '5px',
            fontSize: '20px',
            color: 'aliceblue',
            paddingLeft: '10px',
            backgroundColor: '#004949'
        },
        subscribe: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '2rem'
        },
        checkbox: {
            scale: '1.5'
        }
    }

    return (
        <div style={registerStyle.main}>
            <h1>Register Page</h1>

            <form style={registerStyle.form}>
                <div style={registerStyle.inputDivs}>
                    <label>Username </label>
                    <input
                    className="inputBox"
                    style={registerStyle.inputElem}
                    type={'text'}
                    autoComplete={'false'}/>
                </div>
                <div style={registerStyle.inputDivs}>
                    <label>Email </label>
                    <input
                    className="inputBox"
                    style={registerStyle.inputElem}
                    type={'email'}
                    autoComplete={'false'}/>
                </div>
                <div style={registerStyle.inputDivs}>
                    <label>Password </label>
                    <input
                    className="inputBox"
                    style={registerStyle.inputElem}
                    type={'password'}/>
                </div>
                <div style={registerStyle.subscribe}>
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