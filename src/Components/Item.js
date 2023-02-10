import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Item() {
    // let myObj=useParams();
    // console.log(myObj);
    let {id}=useParams();
    let [movieDetails,setMovieDetails]=useState({});
    async function getMovies(){
        let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c
        `);
        setMovieDetails(data);
    }
    useEffect(()=>{
        getMovies()
    },[])
  return (
  <div className='container mt-3'>
    <div className="card" style={{width: "18rem",height:'45rem'}}>
    <img className="card-img-top h-25" src={'https://image.tmdb.org/t/p/w500/'+movieDetails.poster_path} alt="Card image cap"/>
    <div className="card-body">
        <p className='card-title'>{'Title : '+movieDetails.title}</p>
        <p className='card-title'>{'Vote : '+movieDetails.vote_average}</p>
      <p className="card-text">{'Overview : '+movieDetails.overview}</p>
      {/* <button className='btn btn-danger' onClick={go}> go to Product</button> */}
    </div>
  </div> 
  </div>
  )
}

export default Item