import React from 'react'; // Importing React library

// MovieCard component declaration
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}> {/* Container for the movie card */}
      <div> {/* Container for the movie year */}
        <p>{Year}</p> {/* Displaying the movie year */}
      </div>

      <div> {/* Container for the movie poster */}
        {/* Displaying the movie poster if available, otherwise showing a placeholder */}
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div> {/* Container for the movie type and title */}
        <span>{Type}</span> {/* Displaying the movie type */}
        <h3>{Title}</h3> {/* Displaying the movie title */}
      </div>
    </div> // Closing the movie card container
  );
}

export default MovieCard; // Exporting the MovieCard component
