import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import axios from 'axios';
import MovieBoxes from './MovieBoxes';

export default function SearchMovie() {

  const [searchMovie, setSearchMovie] = useState([]);

  let searchmovie=(event)=>{

    axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${event.target.name.value}`)
    .then((res)=>res.data)
    .then((final)=>setSearchMovie(final.results)
    )

    event.preventDefault();
  }

  return (
    <>
    <div className='container'>
        <form className="search_box" onSubmit={searchmovie}>
            <input type="text" name='name' className='search_inputbox' placeholder='Search For Movies...'/>
            <button className='btns'>Search</button>
        </form>
    </div>
    <MovieBoxes movies={searchMovie}/>
    </>
  )
}
