//new way
// import React from 'react'
// import {data }from '../App';
// import { useContext } from 'react';

// // console.log(data);


// function ChildD() {
// const {name,age}=useContext(data);

//   return (
//     <>
//       {name}
//       {age}
//     </>
//   )
// }

// export default ChildD;



// //old way
// import { data } from '../App';
// function ChildD() {
//   return (

//     <data.Consumer>
//      {
//        ({name, age})=>{
//         return(
//       <>
//       <h1>Lorem ipsum dolor sit amet.{name}</h1>
//       </>
//       )
//         }
//      }

//     </data.Consumer>
//   )


// }

// export default ChildD;



import react from 'react';
import {data} from '../App'
import { useContext } from 'react';


function ChildD(){
  const {name,age}=useContext(data);
  // const {name,age}=useContext(info);

return (
  <div>
    <h1>my name is {name}</h1>
    <h1>my age is {age}</h1>

  </div>
)
}

export default ChildD;



//App.jsx->A->B->C->D
//createContext
//Provider


//D -Consumer