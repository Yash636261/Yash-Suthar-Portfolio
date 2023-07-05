/* eslint-disable react/no-unescaped-entities */

function About() {
  return (
    <div className='bg-light text-dark py-24 px-10'>
        <div className='text-center mb-20'>
            <p className='font-bold text-3xl'>About</p>
            <p className='text-sm'>My introduction</p>
        </div>
        <div className='max-w-3xl mx-auto flex flex-col lg:flex-row-reverse justify-around items-center my-auto'>
            <div className='my-10 max-md:hidden'>
                <img className='border rounded-xl w-64' src="https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png" alt="profileimage" />
            </div>
            <div className='my-10'>
                <p className='max-w-lg text-xl text-center lg:text-left font-medium lg:mr-4'>
                Hello there! I'm a versatile full-stack developer proficient in both front-end and back-end web development. With expertise in all layers of an application, from client-side UI to server-side logic and database management, I can handle the entire development process.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default About
