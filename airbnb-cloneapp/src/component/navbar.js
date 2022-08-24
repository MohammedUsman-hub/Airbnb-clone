import React, { Component } from 'react'
import logo from "../images/logo.png"
import "../index.css"

export default class NavBar extends Component{
    render(){
        return(
            <nav>
                <img id='logo' src={logo}></img>

            </nav>
        );
    }
}
