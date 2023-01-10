import { useEffect, useContext } from "react";
import SearchBarContext from "../context/searchBarContext";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const home = useNavigate()
    const {movieData} = useContext(SearchBarContext)

    useEffect(() => {
        if(!movieData){
            home('/')
        }
    },[])

    const errorContainerStyle ={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        width: '70%',
        height: '40rem',
        border: 'solid black 3px',
        borderRadius: '.5rem',
        padding: '1rem'
    }

    const spanStyle = {
        fontSize: '32px',
        color: 'red'
    }
    // let message = errorMessage.data.message
    // let status = errorMessage.status
    return (
        <div style={errorContainerStyle}>
            <h1>Error Page</h1>
            {/* <h2><span style={spanStyle}>Status Code:</span> {errorCode}</h2>
            <h2><span style={spanStyle}>Message:</span> {errorMessage}</h2> */}
        </div>
    )
};

export default Error;