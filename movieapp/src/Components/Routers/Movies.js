import React , {useState} from 'react'; 
import AddMovie from '../AddMovie'; 
import MovieList from '../MovieList'; 
import {moviesData} from '../MoviesData';

function Movies() { 
  const [movie,setMovie] = useState(moviesData)
  const [ratingSearch,setRatingSearch] = useState("")
  const [name,setName] = useState("") 
  const Addfilm =(newmovie)=>{
    return setMovie([...movie , newmovie])
  }
    return (
        <div>
     <MovieList movie={movie} ratingSearch={ratingSearch}  name={name} />
     <AddMovie  Addfilm={Addfilm}/>    
        </div>
    )
}

export default Movies
