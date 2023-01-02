import React from 'react'
import "../index.css"

export default function Card(props) {
  
  
  let badgeText
  if (props.openSports === 0) {
    badgeText = "SOLD OUT"
  }else if (props.location === "Online"){
    badgeText = "ONLINE"
  } 


        return(
            <div className='card'>
             {badgeText && <div className='card--badge'>{badgeText}</div>}
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