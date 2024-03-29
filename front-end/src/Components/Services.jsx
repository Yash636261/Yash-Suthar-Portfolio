import ServiceCards from "./Cards/ServiceCards"

function Services() {
  return (
    <div className="bg-light text-dark py-24">
        <div>
            <div className='text-center mb-20'>
                <p className='font-bold text-3xl'>Services</p>
                <p className='text-sm'>what I provide</p>
            </div>
            
            <div className="flex justify-around items-center flex-wrap max-w-2xl mx-auto">
                <ServiceCards service="Web Application Development"/>
                <ServiceCards service="Responsive Web Design"/>
                <ServiceCards service="Bug Fixing and Maintenance"/>
                <ServiceCards service="Technical Consultation"/>
            </div>


        </div>
    </div>
  )
}

export default Services
