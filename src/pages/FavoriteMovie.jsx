import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

export default function FavoriteMovie() {

    let fetchData = JSON.parse(localStorage.getItem('moviedata')) ?? [];
    const [filterData, setFilterData] = useState(fetchData);
    let navigate = useNavigate();
    
    let delMovie=(id)=>{
        let filtering = filterData.filter((item)=>item.id != id)
        localStorage.setItem('moviedata',JSON.stringify(filtering))
        toast.success("Movie has removed...")
        setFilterData(filtering)
    }

  return (
    <div className='container'>
      <ToastContainer/>
      <h1 className='fav_heading'>My Favorite Movies</h1>
      <table border={2}>
        <thead>
            <tr align="center">
                <th>Title</th>
                <th>Poster</th>
                <th>Release Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                (filterData != null && filterData.length >= 1)
                ?
                filterData.map((item,index)=>{
                    return(
                        <tr align="center" key={index}>
                            <td>{item.title}</td>
                            <td>
                                <img src={"https://image.tmdb.org/t/p/w1280/"+item.poster_path} width={50} alt="" /></td>
                            <td>{item.release_date}</td>
                            <td>
                                <div className='actionBtns'>
                                <button onClick={()=>navigate(`/detail/${item.id}`)} className='btns mr-20'>View</button>
                                <button className='btns' onClick={()=>delMovie(item.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })
                :
                <tr>
                    <td colSpan={4}>No Favorite Movie Added</td>
                </tr>
            }
        </tbody>
      </table>
    </div>
  )
}
