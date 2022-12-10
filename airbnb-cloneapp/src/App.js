import React from "react"
import Nav from './component/navbar'
import Hero from "./component/hero"
import Card from "./component/card"
import Contact from "./contact"


import Cat1 from "./images/cat.jpg"
import Cat2 from "./images/cat2.jpg"
import Cat3 from "./images/cat3.jpg"
import Cat4 from "./images/cat4.jpg"

import data from "./data.js"



export default function App(){
  const DataJs = data.map(item => {
    return(
      <Card
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })
  return(
    <div>
      <Nav/>
      <Hero/>
      {DataJs}


      <Contact
        img={Cat1}
        name="Cookie"
        phone="07625188827"
        mail="cookie@gmail.com"
      />
      <Contact
        img={Cat2}
        name="Kelly"
        phone="07627865933"
        mail="Kelly@gmail.com"
      />
      <Contact
        img={Cat3}
        name="Billy"
        phone="07002749992"
        mail="billy@gmail.com"
      />
      <Contact
        img={Cat4}
        name="Krissy"
        phone="07142356744"
        mail="Krissy@gmail.com"
      />
     
      
    </div>
  )
}