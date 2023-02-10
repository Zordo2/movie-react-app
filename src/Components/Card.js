import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
    function go(){
        
    }
  return (
    <div className="card" style={{width: "18rem",height:'45rem'}}>
    <img className="card-img-top h-25" src={'https://image.tmdb.org/t/p/w500/'+data.poster_path} alt="Card image cap"/>
    <div className="card-body">
        <p className='card-title'>'{data.title}'</p>
        <p className='card-title'>'{data.vote_average}'</p>
      <p className="card-text">'{data.overview}'</p>
      {/* <button className='btn btn-danger' onClick={go}> go to Product</button> */}
      <Link to={`/item/${data.id}`}>
        <button className='btn btn-danger' onClick={()=>go(data)}> go to Movie</button>

      </Link>
    </div>
  </div>   )
}

export default Card