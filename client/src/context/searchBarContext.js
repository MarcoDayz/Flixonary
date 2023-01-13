import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBarContext = createContext()

export const SearchBarProvider =({children})=> {
    const searchPage = useNavigate()
    const singleMovieNav = useNavigate()
    // const errorpage = useNavigate()
    const [input, setInput] = useState('')
    const [movieData, setMovieData] = useState([])
    const [navId, setNavId] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(input === '') return
            const {data} = await axios.get('https://movie-database-alternative.p.rapidapi.com',
            {params: {s: input, r: 'json', page: '1'},
            headers: {
              'X-RapidAPI-Key': '2d7ecf038dmsh429111318c5531cp1326f2jsn2bb07f49f2a9',
              'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            }})
            setMovieData(data.Search)
            sessionStorage.setItem('searchedMovies', JSON.stringify(data.Search))
            sessionStorage.setItem('searchedInput', input)
            searchPage('/movies')
            console.log(data)
            // setInput('')
        } catch (error) {
            console.log(error)
        }
    }

    const clickMovie = (e) => {
        sessionStorage.setItem('movie', e.target.id)
        // setNavId(e.target.id)
        // console.log(e.target.id)
        singleMovieNav(`/movies/${e.target.id}`)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <SearchBarContext.Provider
        value={
            {
            setInput,
            input,
            handleChange,
            handleSubmit,
            movieData,
            setMovieData,
            clickMovie,
            // navId,
            // setNavId
            }}>
        {children}
        </SearchBarContext.Provider>
    )
};

export default SearchBarContext;