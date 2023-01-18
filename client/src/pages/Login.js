const Login = () => {

    const loginStyle ={
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
            width: '40rem',
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
        btn: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '2rem'
        }
    }

    return (
        <div style={loginStyle.main}>
            <h1>Login Page</h1>
            <form style={loginStyle.form}>
                <div style={loginStyle.inputDivs}>
                    <div>
                        <label>Email </label>
                    </div>
                    <input className={'inputBox'} style={loginStyle.inputElem} type={'text'} />
                </div>
                <div style={loginStyle.inputDivs}>
                    <label>Password </label>
                    <input className={'inputBox'} style={loginStyle.inputElem} type={'password'}/>
                </div>
                <input className={'registerBtn'} type={'submit'} value={'Login'}/>
            </form>
        </div>
    )
};

export default Login;