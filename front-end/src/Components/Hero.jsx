import React from 'react'

function Hero() {
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col-reverse md:flex-row mx-auto bg-[url("../public/background.png")] bg-no-repeat bg-center  bg-blend-darken max-w-7xl bg-gray-600 text-light h-full px-5 justify-evenly items-center'>
        <div className='text-left my-auto'>
            <p className='font-bold text-5xl mb-3'>Hi, i'm yash suthar</p>
            <p className='font-medium text-3xl mb-10'> web dev, open source, learn in public</p>
            <a href="" className='font-bold text-2xl rounded-lg py-2 px-5 hover:text-red-100 bg-moderate text-light'>Download CV</a>
        </div>
        <div className='my-auto'>
            <img className='border rounded-xl w-64' src="https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png" alt="" />
        </div>
    </div>

    </div>
  )
}

export default Hero
