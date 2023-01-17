import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBarContext from "../context/searchBarContext";

const SingleMovie = () => {
    const [singleMovie, setSingleMovie] = useState('')
    const { setInput } = useContext(SearchBarContext)
    const { movieId } = useParams()

    useEffect(() => {
        const moviesData = sessionStorage.getItem('searchedMovies')
        const parseMovies = JSON.parse(moviesData) 
        const searchedInput = sessionStorage.getItem('searchedInput')

        if(!searchedInput){
            console.log('No Input in session')
        }else{
            // console.log(searchedInput)
            setInput(searchedInput)
        }

        const getMovieData = async () => {
            // const {data} = await axios.get('https://1mdb-data-searching.p.rapidapi.com/om',
            //     {params: {i: movieId},
            //     headers: {
            //     'X-RapidAPI-Key': '2d7ecf038dmsh429111318c5531cp1326f2jsn2bb07f49f2a9',
            //     'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
            //     }}
            // )

            const {data} = await axios.get('http://localhost:4000/data')
            console.log(data)
            setSingleMovie(data)
        }

        // const filterMovie = () => {
        //     const movieData = parseMovies.filter((movie) => movie.imdbID === movieId)
        //     console.log(movieData)
        //     setSingleMovie(movieData[0])
        // }
        getMovieData()
        // filterMovie()
    }, [])

    const singleMovieStyle = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '8rem',
            marginBottom: '2rem'
        },
        poster: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '5rem',
            width: '60rem'
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem'
        },
        plot: {
            width: '60rem'
        }
    }

    return (
        <div style={singleMovieStyle.main}>
            {/* <h1>SingleMovie {movieId}</h1> */}
            <div style={singleMovieStyle.poster}>
                <div style={singleMovieStyle.info}>
                    <h1>{singleMovie.Title}</h1>
                    <h3>Year: {singleMovie.Year}</h3>
                    <h3>Language: {singleMovie.Language}</h3>
                    <h3>Genre: {singleMovie.Genre}</h3>
                    <h3>Rated: {singleMovie.Rated}</h3>
                    <h3>Released: {singleMovie.Released}</h3>
                    <h3>Duration: {singleMovie.Runtime}</h3>
                    <h3>Writer(s): {singleMovie.Writer}</h3>
                </div>
                <img src={singleMovie.Poster}></img>
            </div>
            <div style={singleMovieStyle.plot}>
                <h3>{singleMovie.Plot}</h3>
            </div>
        </div>
    )
};

export default SingleMovie;