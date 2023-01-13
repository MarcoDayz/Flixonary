import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBarContext from "../context/searchBarContext";

const SingleMovie = () => {
    const [singleMovie, setSingleMovie] = useState('')
    const { setInput } = useContext(SearchBarContext)
    const { movieId } = useParams()

    useEffect(() => {
        // const movie = sessionStorage.getItem('movie')
        const moviesData = sessionStorage.getItem('searchedMovies')
        const parseMovies = JSON.parse(moviesData) 
        const searchedInput = sessionStorage.getItem('searchedInput')

        if(!searchedInput){
            console.log('No Input in session')
        }else{
            // console.log(searchedInput)
            setInput(searchedInput)
        }

        const filterMovie = () => {
            const movieData = parseMovies.filter((movie) => movie.imdbID === movieId)
            console.log(movieData)
            setSingleMovie(movieData[0].Poster)
        }
        filterMovie()
    }, [])

    const singleMovieStyle = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            width: '90%',
            marginTop: '3rem',
            marginBottom: '2rem'
        }
    }

    return (
        <div style={singleMovieStyle.main}>
            <h1>SingleMovie {movieId}</h1>
            <img src={singleMovie}></img>
        </div>
    )
};

export default SingleMovie;