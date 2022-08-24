import React, { Component } from 'react'
import gridImg from "../images/grid-img.PNG"
import "../index.css"

export default class GridImg extends Component{
    render(){
        return(
            <section className='hero'>
                <img id='grid-img' src={ gridImg }></img>
                <h2 className='hero-h2'>Online Experiences</h2>
                <p className='hero-p'>Join unique interactive activies led by one-of-a-kind hosts-all without leaving home.</p>
            </section>
        )
    }
}
    