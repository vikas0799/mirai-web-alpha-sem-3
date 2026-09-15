// import React from 'react';


// const App= ()=>{
//   return ( 
//   <div>
//     <h1>Lorem ipsum dolor sit.</h1>
//   </div>
// );
// }

// import Users from './Users';
// import Card from './Card';
// // console.log(Card);
// console.log(Users);
// const rishav={
//   fname:"rishav raj",
//   age:30,
//   state:"UP"
// };


// //filtering data
// const UsersData= Users.filter((ele)=>{
//   if(ele.experience<=2)
//     return true;
//   else
//     return false;
// })


// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function App (){
//   return (
//     <div>
//       <MyButton/>
/* <h1>this is norml App functional</h1>
<h1>{rishav.fname}</h1>
<h1>{rishav.state}</h1>
<h1>{Users[0].name}</h1> */
/* {
  UsersData.map((Element)=>{
    return (
      <div style={{backgroundColor:'blue'}}   key={Element.id}>
       <h1>{Element.name}</h1>
       <h1>{Element.role}</h1>
       <h1>{Element.location}</h1>
       <h1>{Element.experience}</h1>
    <img src={Element.image} alt=""  style={{height:'100px'}}/>

      </div>
    )
  })
// } */

//     </div>
//   );
// }


// return (34 23 a b) ;

// const App= ()=>
//    ( <div>hi</div>);


// export { App,MyButton};






// import React from 'react'
// import AdminPanel from './AdminPanel';
// import LoginForm from './LoginForm';

// function App() {
//   let content;
//   const isLoggedIn=true;
//   if (isLoggedIn) {
//     content = <AdminPanel/>;
//   } else {
//     content = <LoginForm/>;
//   }
//   return (
//     <div>
//       {content}
//     </div>
//   );
// }


// export default App;



import React from 'react'
import Card from './Card'

function App() {
    let fname="rishav raj";

  return (
    <>
      <h1 style={{}} >my name is. {fname}</h1>
      {/* <Card style={{}} /> */}
      <Card  age={23} />

    </>
  )
}

export default App