import React from 'react'
import Star from "../images/star.png"
import "../index.css"

export default function Card(props) {
        return(
            <div className='card'>
                <img class="card--image" src={`../images/${props.img}`}></img>  
                  <div className='card-stats'>
                    <img class="card--star" src={Star}></img>
                    <span><b>{props.rating}</b></span>
                    <span className='gray'>({props.reviewCount}) - </span>
                    <span className='gray'>{props.location}</span>
                  </div>
                <p>{props.title}</p>
                <p ><b>From ${props.price}</b> / person</p>
            </div>
        )
    }
