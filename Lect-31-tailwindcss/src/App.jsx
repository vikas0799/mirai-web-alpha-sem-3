import React from 'react'
import Container from './components/Container'
import { FaCartArrowDown } from "react-icons/fa";
import Accordian from './components/Accordian';
import BasicRating from './components/Aman';

function App() {
  return (
    <div>
      <FaCartArrowDown />
      
         <ul className='bg-amber-100 flex gap-2 justify-center font-bold underline'>
          <li>Home</li>
          <li>about</li>
          <li>services</li>
          <li>help</li>
         </ul>

         <Container/>
         {/* <Accordian/> */}
         <BasicRating/>
      </div>
  )
}

export default App