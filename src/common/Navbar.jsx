import React, { useState } from 'react'
import '../App.css'

export default function Navbar() {

  const [navbarShow, setNavbarShow] = useState(false);

  return (
    <div className='navbar'>
        <div className="logo">
            <img src='images/movie_logo.png' width={80} alt="No image" />
        </div>
        <div className="list">
            <ul className='bigList'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/search'>Search Movie</a>
                </li>
                <li>
                    <a href="/favmovies">My Favorite Movies</a>
                </li>
            </ul>

            <ul style={{transform : `scaleY(${(navbarShow) ? 1 : 0})`}} className='smallList'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/search'>Search Movie</a>
                </li>
                <li>
                    <a href="/favmovies">My Favorite Movies</a>
                </li>
            </ul>
            <button className='bar btns' onClick={()=>setNavbarShow(!navbarShow)}>
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </div>
  )
}
