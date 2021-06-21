import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({movie , name , ratingSearch}) => {
    
    return (
        <div>
        <h2><strong>All Movies</strong></h2>
        <div style={{display:"flex" , justifyContent:"space-around" , flexWrap:"wrap"}}>
           
          {movie.filter(el =>
          el.name.toLowerCase().includes(name.toLowerCase().trim()) &&
          el.rate >= ratingSearch)
          .map(film =>( <MovieCard  film={film} key={film.id}/>))

          }
         

        </div>
        </div>
    )
}

export default MovieList