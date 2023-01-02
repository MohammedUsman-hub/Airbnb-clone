import React from "react"
import Nav from './component/navbar'
import Hero from "./component/hero"
import Card from "./component/card"
//import Contact from "./contact"




import data from "./data.js"



export default function App(){
  const DataJs = data.map(item => {
    return(
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return(
    <div>
      <Nav/>
      <Hero/>
      <section className="cards-list">
        {DataJs}
      </section>


  {/*    <Contact
        img="/images/cat.jpg"
        name="Cookie"
        phone="07625188827"
        mail="cookie@gmail.com"
      />
      <Contact
        img="/images/cat2.jpg"
        name="Kelly"
        phone="07627865933"
        mail="Kelly@gmail.com"
      />
      <Contact
        img="/images/cat3.jpg"
        name="Billy"
        phone="07002749992"
        mail="billy@gmail.com"
      />
      <Contact
        img="/images/cat4.jpg"
        name="Krissy"
        phone="07142356744"
        mail="Krissy@gmail.com"
      /> */}
     
      
    </div>
  )
}