import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const [movie, setMovie] = useState(null)

  const API_KEY = "10cf4260"
  
  const getMovie = async (searchTerm) =>{
    //making the API call
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`)

    //converting the response to a JS object
    const data = await response.json()

    //updating the state of the object
    setMovie(data)
  }

  return (
    <div className="App">
     <Form getMovie={getMovie}/> 
     <MovieDisplay movie={movie}/>
      
    
    
    </div>
  );
}

export default App;
