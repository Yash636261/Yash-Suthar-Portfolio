import React from 'react'

function Hero() {
  return (
    <div className='h-screen mx-20'>
      <div className='flex flex-row mx-auto text-light h-full justify-around items-center'>
      {/* bg-[url("../public/background.png")] bg-no-repeat bg-cover bg-blend-darken max-w-7xl bg-gray-600 */}
        <div className='text-left my-auto'>
            <p className='text-2xl tracking-wider'>Hello, my name is</p>
            <p className='font-bold text-5xl mb-3 tracking-wide'>YASH SUTHAR</p>
            <p className='text-3xl mb-10'> Web dev, Open source, Learn in public</p>
            <a href="" className='font-bold text-2xl rounded-lg py-2 px-5 hover:text-red-100 bg-moderate text-light'>Download CV</a>
        </div>
        <div className='my-auto max-md:hidden'>
            <img className='border rounded-xl w-96' src="https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png" alt="profileimage" />
        </div>
    </div>
    </div>
  )
}

export default Hero
