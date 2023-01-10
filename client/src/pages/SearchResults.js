import { useContext } from "react";
import SearchBarContext from "../context/searchBarContext";

const SearchResults = () => {
    const {movieData, input} = useContext(SearchBarContext)

    const searchResultsStyle = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            width: '90%',
            marginTop: '3rem',
            marginBottom: '2rem'
        },
        resultsContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem'
        },
        imgStyle: {
            width: '300px',
            height: '450px'
        }
    }

    return (
        <div style={searchResultsStyle.main}>
            <h1>
                Search results for "{input}"
            </h1>
            <div style={searchResultsStyle.resultsContainer}>
                {movieData.map((movie, index) => (
                    <img style ={searchResultsStyle.imgStyle} src={movie.Poster} key={index} alt={movie.Title} />
                ))}
            </div>
        </div>
    )
};

export default SearchResults;