import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieBoxes({movies}) {
  return (
    <div className="movie_wrapper">
        <div className="container">
            <div className="movies">
              {
                (movies.length > 0)
                ?
                movies.map((item,index)=>{
                  return(
                    <SingleMovie item={item} key={index}/>
                  )
                })
                :
                "No Data"
              }
            </div>
        </div>
    </div>
  )
}

function SingleMovie({item}){
    let navigate = useNavigate()
    return(
      <div className="single_movie">
        <div className="single_movie_img">
          <img src={"https://image.tmdb.org/t/p/w1280"+item.poster_path} alt="" />
        </div>
        <div className="single_movie_content">
          <h2>{item.title}</h2>
          <p>{item.release_date}</p>
          <button className='btns' onClick={()=>navigate(`/detail/${item.id}`)}>More Info</button>
        </div>
      </div>
    )
  }
