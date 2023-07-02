import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/About'

function App() {
  return (
    <div className='bg-[#1f1f1f]'>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
