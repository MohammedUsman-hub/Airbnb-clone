import React, { Component } from 'react'
import Mj from "../images/mj.jpg"
import Star from "../images/star.png"
import "../index.css"

export default class Card extends Component{
    render(){
        return(
            <div className='card'>
                <img class="card--image" src={Mj}></img>  
                  <div className='card-stats'>
                    <img class="card--star" src={Star}></img>
                    <span><b>5.0</b></span>
                    <span className='gray'>(6)</span>
                    <span className='gray'>-USA</span>
                  </div>
                <p>Life lessons with Michael Jordan</p>
                <p ><b>Fom $350</b> / person</p>
            </div>
        )
    }
}