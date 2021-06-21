import React from 'react';
import Rating from './Rating'; 
import {Link} from 'react-router-dom';

const NavBar = ({setRatingSearch , ratingSearch , name , setName}) => {
    return (
        <div > 
            <Link to='/'style={{alignItems:'left', fontSize:'30px', color:'black', textShadow:'1px 1px', margin:'15px' }} >Home</Link> 
            <Link to='/movies'style={{alignItems:'left', fontSize:'30px', color:'black', textShadow:'1px 1px' }} >Movies</Link>
            <input style={{width:'500px' , margin:"20px" , borderStyle:"solid" , borderWidth:"5px" , borderColor:"Black", backgroundColor:'palegoldenrod'}} 
            type="text" placeholder ="search " 
             value={name} onChange={(e)=>setName(e.target.value)} />
            <Rating setRate={setRatingSearch} rate={ratingSearch} />
            
        </div>
    )
}

export default NavBar;