import React, { Component } from 'react'
import Mj from "../images/mj.jpg"
import Star from "../images/star.png"
import "../index.css"

export default class Card extends Component{
    render(){
        return(
            <section>
                  <img class="mj" src={Mj}></img>  
                  <img class="star" src={Star}></img>
                  <p>5.0 6 reviews -USA</p>
                  <p>Life lessons with Michael Jordan</p>
            </section>
        )
    }
}