import React from 'react'
import "./index.css"

import Phone from "./images/phone.png"
import Mail from "./images/mail.jpg"


export default function Contact(props){
        return(
            <div className='contacts'>

                <div className='contact-card'>
                    
                    <img src={props.img}/>
                    <h3>{props.name}</h3>

                    <div className='info-group'>
                        <img src={Phone}></img>
                        <p>{props.phone}</p>
                    </div>

                    <div className='info-group'>
                        <img src={Mail}></img>
                        <p>{props.mail}</p>
                    </div>

                </div>
                
            </div>
        )
    
}