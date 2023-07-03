/* eslint-disable react/no-unescaped-entities */

function About() {
  return (
    <div className='bg-light min-h-screen text-dark py-20 px-20'>
        <div className='text-center mb-20'>
            <p className='font-bold text-5xl'>About</p>
            <p className='text-lg'>My introduction</p>
        </div>
        <div className='flex flex-col justify-around items-center my-auto'>
            <div className='my-10 max-md:hidden'>
                <img className='border rounded-xl w-96' src="https://www.pinclipart.com/picdir/middle/155-1559316_male-avatar-clipart.png" alt="profileimage" />
            </div>
            <div className='my-10'>
                <p className='text-3xl text-center font-medium max-w-5xl'>
                Hello there! I'm a versatile full-stack developer proficient in both front-end and back-end web development. With expertise in all layers of an application, from client-side UI to server-side logic and database management, I can handle the entire development process.
                </p>
            </div>
        </div>




        <div className='my-20 '>
            <div className='text-center mb-20'>
                <p className='font-bold text-5xl'>Skills</p>
                <p className='text-lg'>where i'm proficient</p>
            </div>
            <div className='max-w-5xl mx-auto flex justify-between relative text-2xl h-64'>
                <div className='flex flex-col justify-between'>
                    <a href="">HTML/CSS</a>
                    <a href="">JavaScript</a>
                    <a href="">Tailwind</a>
                    <a href="">React</a>
                    <a href="">NEXT.js</a>
                </div>
                <div className='flex flex-col justify-between'>
                    <a href="">Responsive Design</a>
                    <a href="">Web Performance Optimization</a>
                    <a href="">Testing and Debugging</a>
                    <a href="">Version Control</a>
                    <a href="">Browser Developer Tools</a>
                </div>
            </div>
            {/* <div className='flex justify-around items-center max-w-5xl mx-auto'>
                <div className='bg-moderate p-5 border rounded-2xl w-72'>
                    <div className='flex'>
                        <img className='w-20 h-11 object-top object-cover' src="https://www.frontend-gmbh.de/wp-content/themes/frontendgmbh/downloads/frontend-logo.png" alt="" /> 
                        <p className='my-auto font-bold text-3xl'>Front-End</p>
                    </div>
                    <div className='font-medium text-xl my-10 ml-5'>
                        <ul>
                            <li><a href="">React</a></li>
                            <li><a href="">Next.js</a></li>
                            <li><a href="">Tailwind</a></li>
                            <li><a href="">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
                <div className='bg-moderate p-5 border rounded-2xl w-72'>
                    <div className='flex'>
                        <img className='w-16 h-16' src="https://cdn1.iconfinder.com/data/icons/industrial-35/60/setting__industrial__screen__LCD__energy-512.png" alt="" />
                        <p className='my-auto font-bold text-3xl'>Back-End</p>
                    </div>
                    <div className='font-medium text-xl my-10 ml-5'>
                        <ul>
                            <li><a href="">React</a></li>
                            <li><a href="">Next.js</a></li>
                            <li><a href="">Tailwind</a></li>
                            <li><a href="">JavaScript</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>

        <div>
            <div className='text-center mb-20'>
                <p className='font-bold text-5xl'>Services</p>
                <p className='text-lg'>what I provide</p>
            </div>
            
            <div className="flex justify-around flex-wrap max-w-2xl mx-auto">
                <div className="w-48 p-5 border rounded-md bg-moderate text-dark my-4">
                    <p className="font-semibold text-2xl mb-8">Web Application Development</p>
                    <a className="font-medium text-lg text-light" href="">Know more-&gt; </a>
                </div>
                <div className="w-48 p-5 border rounded-md bg-moderate text-dark my-4">
                    <p className="font-semibold text-2xl mb-8">Responsive Web Design</p>
                    <a className="font-medium text-lg text-light" href="">Know more-&gt; </a>
                </div>
                <div className="w-48 p-5 border rounded-md bg-moderate text-dark my-4">
                    <p className="font-semibold text-2xl mb-8">Database Management</p>
                    <a className="font-medium text-lg text-light" href="">Know more-&gt; </a>
                </div>
                <div className="w-48 p-5 border rounded-md bg-moderate text-dark my-4">
                    <p className="font-semibold text-2xl mb-8">API Development</p>
                    <a className="font-medium text-lg text-light" href="">Know more-&gt; </a>
                </div>
                <div className="w-48 p-5 border rounded-md bg-moderate text-dark my-4">
                    <p className="font-semibold text-2xl mb-8">Bug Fixing and Maintenance</p>
                    <a className="font-medium text-lg text-light" href="">Know more-&gt; </a>
                </div>
                <div className="w-48 p-5 border rounded-md bg-moderate text-dark my-4">
                    <p className="font-semibold text-2xl mb-8">Technical Consultation:</p>
                    <a className="font-medium text-lg text-light" href="">Know more-&gt; </a>
                </div>
            </div>

            <div className="max-w-3xl mx-auto text-center my-20">
                <p className="font-bold text-3xl mb-5">Have any project ideas? Let's discuss.</p>
                <a className="font-semibold text-xl rounded-lg py-4 px-7 hover:text-red-100 bg-moderate text-light" href="">Strat Talking &gt;&gt;</a>
            </div>
        </div>

      
    </div>
  )
}

export default About
