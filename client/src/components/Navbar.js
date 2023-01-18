import { useContext } from "react";
import SearchBarContext from "../context/searchBarContext";
import { Outlet, Link } from "react-router-dom";

import {AiOutlineSearch} from "react-icons/ai"
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    const {input, handleChange, handleSubmit} = useContext(SearchBarContext)

    const navBarStyle = {
        main: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '6rem',
            paddingBottom: '2rem',
            position: 'fixed',
            backgroundImage: 'linear-gradient(180deg, rgb(0 24 24),rgb(0 52 52),rgb(0 73 73 / 97%), #00000000)',
            zIndex: '1'

        },
        h1Style: {
            marginLeft: '12px'
        },
        inputStyle: {
            width: '20rem',
            backgroundColor: 'rgb(0 32 32)',
            fontSize: 'large',
            paddingLeft: '10px'
        },
        optionsDiv: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginRight: '12px'
        },
        form: {
            display: 'flex',
            width: '23.2rem',
            justifyContent: 'space-between'
        }
    }

    const linkStyles = {
        span: {
            color: 'aqua'
        },
        link: {
            textDecoration: 'none',
            color: 'aliceblue'
        }
    }

    return (
        <>
        <div style={navBarStyle.main}>
            <Link to={'/'} style={linkStyles.link}>
                <h1 style={navBarStyle.h1Style}>
                    <span style={linkStyles.span}>Flix</span>onary
                </h1>
            </Link>
            <form onSubmit={(e) => handleSubmit(e)}
            style={navBarStyle.form}>
                <input
                    className='navSearch'
                    style={navBarStyle.inputStyle}
                    type={'text'}
                    value={input}
                    onChange={handleChange} />
                {/* <input type={'submit'}></input> */}
                <IconContext.Provider value={{style: {height: '2rem'}, className: 'searchIcon'}}>
                    <AiOutlineSearch onClick={handleSubmit}/>
                </IconContext.Provider>
            </form>
            <div
            style={navBarStyle.optionsDiv}>
                <Link to={'/register'} style={linkStyles.link}>
                    <h3>Join Now</h3>
                </Link>
                <Link to={'/login'} style={linkStyles.link}>
                    <h3>Login</h3>
                </Link>
            </div>
        </div>
        <Outlet />
        </>

    )
};

export default Navbar;