import { useContext } from "react";
import SearchBarContext from "../context/searchBarContext";
import { Outlet, Link } from "react-router-dom";

import {AiOutlineSearch} from "react-icons/ai"
import { IconContext } from "react-icons/lib";

const Navbar = () => {
    const {input, handleChange, handleSubmit} = useContext(SearchBarContext)

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
        <div className="navMain">
            <Link to={'/'} style={linkStyles.link}>
                <h1 className="navTitle">
                    <span style={linkStyles.span}>Flix</span>onary
                </h1>
            </Link>
            <form onSubmit={(e) => handleSubmit(e)}
            className="navForm">
                <input
                    className='navSearch'
                    type={'text'}
                    value={input}
                    onChange={handleChange} />
                <IconContext.Provider value={{style: {height: '2rem'}, className: 'searchIcon'}}>
                    <AiOutlineSearch onClick={handleSubmit}/>
                </IconContext.Provider>
            </form>
            <div
                className="navOptionsContainer">
                <Link to={'/register'} style={linkStyles.link}>
                    <h3 className="navOptions">Join Now</h3>
                </Link>
                <Link to={'/login'} style={linkStyles.link}>
                    <h3 className="navOptions">Login</h3>
                </Link>
            </div>
        </div>
        <Outlet />
        </>

    )
};

export default Navbar;