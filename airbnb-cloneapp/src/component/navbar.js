import React, { Component } from 'react'
import "../index.css"

export default class NavBar extends Component{
    render(){
        return(
            <nav>
                <img id='logo' src="images/logo.png"></img>
                <img id='earth-icon' src='images/earth.png'></img>
                <img id='icon-img' src='images/icon.jpg'></img>
                <h6 id='nav-txt'>Airbnb your home</h6>

            </nav>
        );
    }
}
