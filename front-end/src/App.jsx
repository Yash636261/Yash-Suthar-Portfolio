import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='bg-[#1f1f1f] font-sans'>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
