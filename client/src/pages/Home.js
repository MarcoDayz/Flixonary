const Home = () => {
    
    const homeStyle = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '3rem'
        }
    }

    return(
        <div style={homeStyle.main}>
            <h1>Home</h1>
        </div>
    )

};

export default Home;