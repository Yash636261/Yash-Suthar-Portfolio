/* eslint-disable react/no-unescaped-entities */
import { Element } from 'react-scroll'


function About() {
  return (
    <Element id='about-section' className='relative bg-light text-dark py-24 px-10'>
        
        <div className="absolute max-md:invisible bg-red-400 rounded-full right-36 top-[30vh] w-72 h-72 filter blur-2xl opacity-30 animate-blob mix-blend-multiply "></div>
        <div className="absolute max-md:invisible bg-blue-700 rounded-full right-72 top-[30vh] w-72 h-72 filter blur-2xl opacity-30 animate-blob mix-blend-multiply animation-delay-2000"></div>
        <div className="absolute max-md:invisible bg-green-700 rounded-full right-56 top-[40vh] w-72 h-72 filter blur-2xl opacity-30 animate-blob mix-blend-multiply animation-delay-4000"></div>
        <div className='text-center mb-20'>
            <p className='font-bold text-3xl'>About</p>
            <p className='text-sm'>My introduction</p>
        </div >
        <div className=' max-w-3xl mx-auto flex flex-col lg:flex-row-reverse justify-around items-center my-auto'>
            <div className='ml-4 my-10 max-md:hidden z-10'>
                <img className='border rounded-xl w-64' src="https://th.bing.com/th/id/OIP.JAAd31mxF33HqZEgYq9zgAHaHv?pid=ImgDet&rs=1" alt="profileimage" />
            </div>
            <div className='my-10'>
                <p className='max-w-lg text-xl text-center font-medium lg:mr-4'>
                Hello there! I'm a versatile full-stack developer proficient in both front-end and back-end web development. With expertise in all layers of an application, from client-side UI to server-side logic and database management, I can handle the entire development process.
                </p>
            </div>
        </div>
      
    </Element>
  )
}

export default About
