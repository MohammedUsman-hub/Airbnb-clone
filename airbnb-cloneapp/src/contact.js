import React from 'react'
import "./index.css"



export default function Contact(props){
        return(
            <div className='contacts'>

                <div className='contact-card'>
                    
                    <img src={props.img}/>
                    <h3>{props.name}</h3>

                    <div className='info-group'>
                        <img src="images/phone.png"></img>
                        <p>{props.phone}</p>
                    </div>

                    <div className='info-group'>
                        <img src="images/mail.jpg"></img>
                        <p>{props.mail}</p>
                    </div>


                </div>
                
            </div>
        )
    
}