import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Movie() {
    let [movie,setMovie]=useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c').then((res)=>{
            console.log(res.data.results);
            setMovie(res.data.results)
        })
    },[]);
   
  return (
    <div className='container'>
        <div className='row'>
         {movie.map((item,index)=><div key={index} className='col-md-4 p-5 mt-3'><Card data={item}/></div>)}

        </div>
    </div>
  )
}

export default Movie