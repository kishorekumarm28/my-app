import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard"; // Importing the MovieCard component
// import SearchIcon from "./search.svg"; // Importing the SearchIcon SVG file
import "./App.css"; // Importing the CSS file for styling

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"; // API URL for OMDB

const App = () => {
  // State declarations
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [movies, setMovies] = useState([]); // State for storing movie data

  useEffect(() => {
    // Effect hook to perform an initial search for Batman movies when the component mounts
    searchMovies("Batman"); // Initial search for Batman movies
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to search for movies based on the provided title
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); // Fetching data from the OMDB API
    const data = await response.json(); // Parsing the response data

    setMovies(data.Search); // Updating the movies state with the search results
  };

  return (
    <div className="app"> {/* Main container */}
      <h1>Rampex</h1> {/* Heading of the application */}

      <div className="search"> {/* Search input container */}
        <input
          value={searchTerm} // Input value bound to the searchTerm state
          onChange={(e) => setSearchTerm(e.target.value)} // Function to update the searchTerm state on input change
          placeholder="Search for movies" // Placeholder text for the input field
        />
        {/* Image icon for search (commented out) */}
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        /> */}
      </div>

      {/* Conditional rendering based on the movies state */}
      {movies?.length > 0 ? ( // If movies array has data
        <div className="container"> {/* Container for displaying movie cards */}
          {/* Mapping through the movies array and rendering MovieCard component for each movie */}
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} /> // Passing movie data as props to MovieCard component
          ))}
        </div>
      ) : (
        <div className="empty"> {/* Displayed when no movies are found */}
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App; // Exporting the App component
