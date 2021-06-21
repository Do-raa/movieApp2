import React , {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';  
import {moviesData} from '../MoviesData'; 
import ReactPlayer from 'react-player';



function Movie({match}) { 
   const [movie, setMovie] = useState(moviesData);
     useEffect(() => {movie.find(movie => movie.id === +match.params.id)
             }, [match.params.id]); 
    return (
        <div> 
         <h1>{movie.name}</h1> 
            <h3>{movie.description} </h3> 
            <hr style={{ margin: "50px 0" }} />
           <ReactPlayer style={{ width: 320, height: 240 }}    url={movie.videoUrl}     controls /> 
         <br/>
     
          
            <Link to='/' style={{color:'black'}}>Go Back To Home Page</Link>
        </div>
    )
}

export default Movie
