import React from 'react'
import './Card.css'
import Section from './Section'

function Card() {
  return (
    <div className='card'>

        <h1>this is Card componet</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium.</p>

     {Section}
    {/* <Section/> */}
    </div>
  )
}

export default Card