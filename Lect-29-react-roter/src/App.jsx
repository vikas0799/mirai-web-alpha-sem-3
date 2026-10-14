import React from 'react'
import {Routes,Route,Link,BrowserRouter } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Help from './components/Help'


function App() {
  return (
   <BrowserRouter>
        <header>

        </header>
        {/* // use this for URL */}
        <Link to='/' >Home</Link> {   "||" }
        <Link to='/about'>About</Link>{   "||" }
        <Link to='/service'>Service</Link>{   "||" }
        <Link to='/help'>Help</Link>

        <Routes>
          {/* //use this ki kis routes pe kaun sa componet render hoga */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/help' element={<Help/>}/>


        </Routes>
   
   
   </BrowserRouter>
  )
}

export default App