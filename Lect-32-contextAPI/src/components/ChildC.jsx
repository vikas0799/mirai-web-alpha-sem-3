import React, { useContext } from 'react'
import { angryDevesh } from './ChildA';
import ChildD from './ChildD';


function ChildC() {
  const {mood,food}=useContext(angryDevesh);


  return (
    
    <div>ChildC
      <h1>{mood}</h1>
      <h1>{food}</h1>
        {/* <ChildD data={{name,age}}/> */}
        <ChildD/>
    </div>
  )
}

export default ChildC