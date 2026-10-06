// import React, { useState } from 'react'
// import Foods from './Foods';
// import Dipesh from './Dipesh';

// function App() {

//   const [cartCount, setcartCount] = useState(0);


//   // function addtocart() {
//   //   console.log("hii");
//   //   console.log("bye");
//   //   setcartCount(cartCount+1);
//   // }

//   const addtocart = () => {
//     console.log("hii");
//     console.log("bye");
//     setcartCount(cartCount + 1);
//   }

//   const removetocart=()=>{
//     if(cartCount==0){
//       console.log("byeeeee");
//     }
//     else{
//     setcartCount(cartCount-1);

//     }
//   }
//   let myage=90;
//   return (
//     <div>

//       <h1>{cartCount}</h1>

//       <Dipesh Foods={Foods} age={myage} addtocart={addtocart} removetocart={removetocart}/>

//     </div>
//   )
// }

// export default App


// | Property           | Use                        |
// | ------------------ | -------------------------- |
// | `e.target`         | jis element par event hua  |
// | `e.target.value`   | input ki current value     |
// | `e.target.checked` | checkbox checked/unchecked |
// | `e.target.name`    | input ka name              |
// | `e.target.id`      | element ka id              |
// | `e.target.type`    | input ka type              |



// import React from 'react'

// function App() {


//  const hitme=(e)=>{
//   console.log(e.target);
//   console.log("hi");
//   console.log("bye");
//  }

//   return (
//     <div>
//      <button onClick={hitme}>clicke me</button>
//      <h2>Lorem ipsum dolor sit amet.</h2>
//      <button onClick={hitme}>add me</button>
//      <form action="" method="get">
//       <input type="text" />
//      </form>


//     </div>
//   )
// }

// export default App



import { useState } from 'react';

export default function MyInput() {
   const text="vikas";
   function shubahm (){
    console.log()
   }

  return (
    <>
      <input value={text} onChange={shubham} />
     
    </>
  );
}