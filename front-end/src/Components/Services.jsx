import ProjectCards from "./Cards/ProjectCards"

function Services() {
  return (
    <div className="bg-light text-dark">
        <div>
            <div className='text-center mb-20'>
                <p className='font-bold text-3xl'>Services</p>
                <p className='text-sm'>what I provide</p>
            </div>
            
            <div className="flex justify-around flex-wrap max-w-lg mx-auto">
                <ProjectCards heading="Web Application Development"/>
                <ProjectCards heading="Responsive Web Design"/>
                <ProjectCards heading="Database Management"/>
                <ProjectCards heading="API Development"/>
                <ProjectCards heading="Bug Fixing and Maintenance"/>
                <ProjectCards heading="Technical Consultation"/>
            </div>

            <div className="max-w-xl mx-auto text-center py-20">
                <p className="font-bold text-xl mb-5">Have any project ideas? Let&lsquo;s discuss.</p>
                <a className="font-semibold text-sm rounded-lg py-2 px-4 hover:text-red-100 bg-moderate text-light" href="">Strat Talking &gt;&gt;</a>
            </div>
        </div>
    </div>
  )
}

export default Services
