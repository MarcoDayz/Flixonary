import { useState, useEffect } from "react";
// import axios from 'axios';
import { Routes, Route, useNavigate} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SearchResults from "./pages/SearchResults";

const App = () => {
    // const errorPage = useNavigate()
    // const [movieData, setMovieData] = useState([])


    useEffect(() => {
        const getShows = async () => {
            // console.log('working')
            // try {
            //     const {data} = await axios.get('https://movie-database-alternative.p.rapidapi.com',
            //     {params: {s: 'Avengers', r: 'json', page: '1'},
            //     headers: {
            //       'X-RapidAPI-Key': '2d7ecf038dmsh429111318c5531cp1326f2jsn2bb07f49f2a9',
            //       'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            //     }}
            //         )
            //     console.log(data)
            //     setMovieData(data.Search)
            // } catch (error) {
            //     errorPage('/errorpage')
            //     console.log(error)
            // }
        }
        getShows()
    }, [])

    return (
        <Routes>
            <Route path={'/'} element={<Navbar />}>
                <Route path={'/'} element={<Home />}/>
                <Route path={'/search-results'} element={<SearchResults />}/>
            </Route>
            <Route path={'/errorpage'} element={<Error />}/>
        </Routes>
    )
};

export default App;