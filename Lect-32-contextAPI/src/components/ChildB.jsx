import React from 'react'
import ChildC from './ChildC'

function ChildB() {
  return (
    <div>ChildB
        {/* <ChildC data={{name,age}}/> */}
        <ChildC/>
    </div>
  )
}

export default ChildB