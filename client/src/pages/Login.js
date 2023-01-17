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
            gap: '1rem',
            border: 'solid',
            borderRadius: '1rem',
            padding: '2rem'
        }
    }

    return (
        <div style={loginStyle.main}>
            <h1>Login Page</h1>
            <form style={loginStyle.form}>
                <div>
                    <label>Email </label>
                    <input type={'text'} />
                </div>
                <div>
                    <label>Password </label>
                    <input type={'text'}/>
                </div>
                <input type={'submit'} value={'login'}/>
            </form>
        </div>
    )
};

export default Login;