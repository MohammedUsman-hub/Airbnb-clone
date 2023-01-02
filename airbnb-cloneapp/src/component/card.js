import React from 'react'
import "../index.css"

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  } 


        return(
            <div className='card'>
             {badgeText && <div className='card--badge'>{badgeText}</div>}
                <img class="card--image" src={`../images/${props.item.img}`}></img>  
                  <div className='card-stats'>
                    <img class="card--star" src={process.env.PUBLIC_URL + '/images/star.png'}/>
                    <span><b>{props.item.stats.rating}</b></span>
                    <span className='gray'>({props.item.stats.reviewCount}) - </span>
                    <span className='gray'>{props.item.location}</span>
                  </div>
                <p>{props.item.title}</p>
                <p ><b>From ${props.item.price}</b> / person</p>
            </div>
        )
    }