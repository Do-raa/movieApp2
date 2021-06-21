import React from 'react';
import Rating from './Rating';
import "./MovieCard.css";  
import {Link} from 'react-router-dom';


const MovieCard = ( {film , key}) => {
    
    return (
        <div>
        <div hey={key}>

<div class="wrapper">

<div class="cards">

    <figure class="card">

        <img src={film.url} alt=""/>{"\n"}

        
        
    </figure> 
    <Link style={{color:"black"}} to={'/movie/' + film.name}>{film.name}</Link>
    <span> <Rating rate ={film.rate}/> </span>
</div>



</div>

        </div>
        
        </div>
    )
}

export default MovieCard