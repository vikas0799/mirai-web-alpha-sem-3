import React from 'react'
import './App.css'
import Card from './Card'
import {Footer,MayankFooter} from './Footer.jsx'
import Section from './Section'
const dipesh="party kab h ?";
const age=90;
console.log(Footer); 
console.log(Section);


function App() {
  return (
   <>
    <style>
      
      {/* {
        `
        h1{
          color:red;
        }
          `
      } */}

    </style>
    <div>

   {/* <h1 style={{color:'red'}}>this is app components</h1> */}
   <h1>Lorem ipsum dolor sit.</h1>
   <h1>hi im parth and age-= {age}</h1>
   {dipesh}
   {/* <Card/> */}
   
   <Footer/>
   <Footer/>
   <Footer/>
   <MayankFooter/>

   {/* <Section /> */}
  {/* {Section} */}
  {/* <Section/> */}
    </div>
   </>
  )
}

export default App