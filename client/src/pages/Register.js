const Register = () => {

    const registerStyle ={
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            width: '90%',
            marginTop: '3rem',
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
        },
        subscribe: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <div style={registerStyle.main}>
            <h1>Register Page</h1>

            <form style={registerStyle.form}>
                <div>
                    <label>Username </label>
                    <input type={'text'}
                    autoComplete={'false'}/>
                </div>
                <div>
                    <label>Email </label>
                    <input type={'email'}
                    autoComplete={'false'}/>
                </div>
                <div>
                    <label>Password </label>
                    <input type={'password'}/>
                </div>
                <div style={registerStyle.subscribe}>
                    <label>by checking this box you agree with the terms and conditions on this site.</label>
                    <div>
                    <input type={'checkbox'}/>
                    </div>
                </div>
                <div>
                    <input type={'submit'} value={'register'}/>
                </div>
            </form>
        </div>
    )
};

export default Register;