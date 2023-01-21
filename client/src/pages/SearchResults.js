import { useContext, useEffect } from "react";
import SearchBarContext from "../context/searchBarContext";

const SearchResults = () => {
    const {movieData, input, clickMovie, setMovieData, setInput} = useContext(SearchBarContext)

    const posterFilter = (movieData) => {
        movieData.forEach(movie => {
            if(movie.Poster === null){
                console.log(movie)
            }
        });
    }

    useEffect(() => {
        const movies = sessionStorage.getItem('searchedMovies')
        const searchedInput = sessionStorage.getItem('searchedInput')
        if(!movies){
            console.log('No Movies in session')
        }else{
            // console.log(JSON.parse(movies))
            setMovieData(JSON.parse(movies))
        }

        if(!searchedInput){
            console.log('No Input in session')
        }else{
            // console.log(searchedInput)
            setInput(searchedInput)
        }

        posterFilter(movieData)
    }, [])

    return (
        <div className="resultsMain">
            <h1>
                Search results for "{input}"
            </h1>
            <div className="resultContainer">
                {movieData.map((movie, index) => (
                    <img
                    className={'imgPoster'}
                    id={`${movie.imdbID}`}
                    src={movie.Poster}
                    key={index}
                    alt={movie.Title}
                    onClick={clickMovie}/>
                ))}
            </div>
        </div>
    )
};

export default SearchResults;