import { useContext } from "react";
import SearchBarContext from "../context/searchBarContext";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const {input, handleChange, handleSubmit} = useContext(SearchBarContext)

    const navBarStyle = {
        main: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderBottom: 'solid black 2px',
            position: 'fixed',
            backgroundColor: 'white'
        },
        h1Style: {
            marginLeft: '12px'
        },
        inputStyle: {
            width: '20rem'
        },
        optionsDiv: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginRight: '12px'
        }
    }

    const linkStyles = {
        span: {
            color: 'aqua'
        },
        link: {
            textDecoration: 'none',
            color: 'black'
        }
    }

    return (
        <>
        <div style={navBarStyle.main}>
            <Link to={'/'} style={linkStyles.link}>
                <h1 style={navBarStyle.h1Style}>
                    <span style={linkStyles.span}>Stack</span>Flix
                </h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input
                    style={navBarStyle.inputStyle}
                    type={'text'}
                    value={input}
                    onChange={handleChange} />
                <input type={'submit'} />
            </form>
            <div
            style={navBarStyle.optionsDiv}>
                <button>Join Now</button>
                <button>Login</button>  
            </div>
        </div>
        <Outlet />
        </>

    )
};

export default Navbar;