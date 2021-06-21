import {useState} from 'react';
import './App.css';
import Movies from './Components/Routers/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';  
import Movie from './Components/Routers/WatchMovie'; 
import {Route , Switch} from 'react-router-dom';
import Home from './Components/Routers/Home';

function App() {
  const [ratingSearch,setRatingSearch] = useState("")
  const [name,setName] = useState("")


  return (
    <div className="App">
      <NavBar ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} name={name} setName={setName} />
     
     <div> 
     <Switch> 
       <Route exact path='/' component={Home}/> 
       <Route path='/movies' component={Movies}/>
       <Route path='/movie/:id' component={Movie}/>
     </Switch>
    </div> 
    </div>
  );
}

export default App;