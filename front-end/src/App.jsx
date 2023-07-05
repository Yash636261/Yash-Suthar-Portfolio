import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Project from './Components/Project'

function App() {
  return (
    <div className='bg-[#1f1f1f] font-sans'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
