import React from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC'
import ChildD from './ChildD'
import { createContext } from 'react'
export const angryDevesh=createContext()

function ChildA() {
  const mood="angry mood"
  const food="burger nai mila due to vikas sir"


  return (
    

    <angryDevesh.Provider value={{mood,food}}>
    <div>

        ChildA
     {/* <h1>{name}</h1>
     <h1>{age}</h1> */}
   {/* <ChildB data={{name,age}}/> */}
   <ChildB/>
  
    </div>
    </angryDevesh.Provider>
  )
}

export default ChildA