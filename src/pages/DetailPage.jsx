import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

export default function DetailPage() {
  const [singleData, setSingleData] = useState({});
  let id = useParams().id;
  let navigate = useNavigate();


  let arrData = JSON.parse(localStorage.getItem('moviedata')) ?? [];


  const addFav = (id) => {
    let filter = arrData.filter((item) => item.id == id)


    if (filter.length == 0) {
      arrData = [...arrData, singleData]
      localStorage.setItem('moviedata', JSON.stringify(arrData))
      toast.success("Movie has saved in favorites")
    }
    else {
      toast.error("Movie has already exists in Favorite...")
    }

  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`)
      .then((res) => res.data)
      .then((final) => setSingleData(final))
  }, [id]);


  return (
    <section className='detail_background'>
      <ToastContainer />
      <div className='container'>
        <div className="detail_box">
          <div className="detail_poster">
            <img src={"https://image.tmdb.org/t/p/w1280/" + singleData.poster_path} alt="" />
          </div>
          <div className='detail_content'>
            <h1>{singleData.title}</h1>
            <p>{singleData.release_date}</p>
            <h2>Overview</h2>
            <p>
              {singleData.overview}
            </p>
            <div className='detail_btns'>
              <button className='btns' onClick={() => addFav(singleData.id)}>Add To Favorite</button>
              <button className='btns' onClick={() => navigate('/')}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
