import { useState, useEffect } from "react";
import axios from 'axios';

import Loading from "./components/Loading"
import Navbar from "./components/Navbar";
import MovieSlider from "./components/MovieSlider";
import Categories from "./components/Categories";

const App = () => {
    const [loading, setLoading] = useState(true)
    const [showsData, setShowsData] = useState([])

    useEffect(() => {
        const getShows = async () => {
            const {data} = await axios.get('https://imdb-top-100-movies.p.rapidapi.com/',
            {headers: {
                'X-RapidAPI-Key': '2d7ecf038dmsh429111318c5531cp1326f2jsn2bb07f49f2a9',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }})
            console.log(data)
        }
        getShows()
        setLoading(false)
    }, [])

    return (
        <>
        <Navbar />
            {loading ?
                <>
                    <Loading />
                </>
            :
                <>
                    <MovieSlider />
                    <Categories />
                </>
            }
        </>
    )
};

export default App;