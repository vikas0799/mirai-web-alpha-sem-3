import React from 'react'
import Navbar from './Navbar';
import Content from './Content';
// import Footer from '../Footer';

const age=21;

function Nikhil (){
  return (
    <>
      <h1>hi i am nikhil</h1>
      <p>Lorem, ipsum dolor.</p>
    </>
  )
}


function App() {
  const name = "sagar";

  return <div>
    <Nikhil/>
    <h1>my name is {name} and age= {age}</h1>
    <h1>Lorem ipsum dolor sit.</h1>
    <p>Lorem {name} ipsum dolor sit amet.</p>

    <Navbar />
    {/* <Navbar />
       <Navbar></Navbar> */}
    <main style={{display:'flex', backgroundColor:'lightblue', gap:'10px'}}>
      <div style={{margin:'10px' }}>
        <Content />
        <Content />
      </div>

      <div>
        <Content />
        <Content />
      </div>

    </main>
     <Footer />
     <Footer></Footer>

  </div>
}

export default App