const Login = () => {

    return (
        <div className={'loginMain'}>
            <h1>Login Page</h1>
            <form  className={'loginForm'}>
                <div className={'log-InputContainer'}>
                    <div>
                        <label>Email </label>
                    </div>
                    <input
                    className={'inputBox'}
                    type={'email'} />
                </div>
                <div className={'log-InputContainer'}>
                    <label>Password </label>
                    <input
                    className={'inputBox'}
                    type={'password'}/>
                </div>
                <input
                className={'registerBtn'}
                type={'submit'}
                value={'Login'}/>
            </form>
        </div>
    )
};

export default Login;