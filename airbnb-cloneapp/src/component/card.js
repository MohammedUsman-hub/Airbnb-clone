import React from 'react'
import "../index.css"

export default function Card(props) {
  console.log(props.openSpots)
        return(
            <div className='card'>
                <img class="card--image" src={`../images/${props.img}`}></img>  
                  <div className='card-stats'>
                    <img class="card--star" src={process.env.PUBLIC_URL + '/images/star.png'}/>
                    <span><b>{props.rating}</b></span>
                    <span className='gray'>({props.reviewCount}) - </span>
                    <span className='gray'>{props.location}</span>
                  </div>
                <p>{props.title}</p>
                <p ><b>From ${props.price}</b> / person</p>
            </div>
        )
    }