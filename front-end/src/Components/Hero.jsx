
function Hero() {
  return (
    <div className='h-screen mx-auto max-w-6xl'>
      <div className='flex flex-row mx-auto text-light h-full justify-around items-center'>
      {/* bg-[url("../public/background.png")] bg-no-repeat bg-cover bg-blend-darken max-w-7xl bg-gray-600 */}
        <div className='md:text-left text-center my-auto'>
            <p className='text-3xl tracking-wider'>Hello, my name is</p>
            <p className='font-bold text-6xl mb-3 tracking-wide'>&lt;YASH SUTHAR&gt;</p>
            <p className='text-4xl mb-10'> Web dev, Open source, Learn in public</p>
            <a href="" className='font-semibold text-3xl rounded-lg py-4 px-7 hover:text-red-100 bg-moderate text-light'>Download CV</a>
        </div>
        <div className='my-auto max-md:hidden'>
            <img className='border rounded-xl w-96' src="https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png" alt="profileimage" />
        </div>
    </div>
    </div>
  )
}

export default Hero
