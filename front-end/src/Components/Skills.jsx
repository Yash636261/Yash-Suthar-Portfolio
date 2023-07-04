import SkillsCard from "./Cards/SkillsCard"

function Skills() {
    const cardData={
        card1:{
            heading : 'Front-end',
            description :'Creating intuitive, responsive, and visually appealing user interfaces and experiences.',
            techAndTools : 'HTML/CSS Javascript React NEXT.js'
        },
        card2:{
            heading : 'Back-end',
            description :'Designing and developing scalable, efficient, and secure server-side applications.',
            techAndTools : 'Express Node.js'
        },
        card3:{
            heading : 'Database',
            description :'Managing, organizing, and optimizing databases for efficient data storage and retrieval.',
            techAndTools : 'MySQL MongoDB'
        }
        
    }
  
    return (
      <div className="bg-light text-dark px-5">
        <div className='py-20 '>
          <div className='text-center mb-20'>
            <p className='font-bold text-3xl'>Skills</p>
            <p className='text-sm'>where I&lsquo;m proficient</p>
          </div>
          <div className="max-w-5xl mx-auto flex md:flex-wrap max-md:flex-col justify-around">
            <SkillsCard heading={cardData.card1.heading} description={cardData.card1.description} techAndTools={cardData.card1.techAndTools} />
            <SkillsCard heading={cardData.card2.heading} description={cardData.card2.description} techAndTools={cardData.card2.techAndTools} />
            <SkillsCard heading={cardData.card3.heading} description={cardData.card3.description} techAndTools={cardData.card3.techAndTools} />
           </div>
           {/* <div className='max-w-3xl mx-auto flex flex-wrap justify-around text-lg h-64 font-semibold'>
                    <a className="m-3" href="">HTML/CSS</a>
                    <a className="m-3" href="">JavaScript</a>
                    <a className="m-3" href="">Tailwind</a>
                    <a className="m-3" href="">React</a>
                    <a className="m-3" href="">NEXT.js</a>
                    <a className="m-3" href="">Responsive Design</a>
                    <a className="m-3" href="">Web Performance Optimization</a>
                    <a className="m-3" href="">Testing and Debugging</a>
                    <a className="m-3" href="">Version Control</a>
                    <a className="m-3" href="">Browser Developer Tools</a>
            </div> */}
        </div>
    </div>
  )
}

export default Skills
