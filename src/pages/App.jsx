import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import MovieBoxes from './MovieBoxes';

function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1')
    .then((res)=>res.data)
    .then((final)=>setMovies(final.results)
    )
  }, []);

  return (
    <>
      <MovieBoxes movies={movies}/>
    </>
  )
}



export default App
