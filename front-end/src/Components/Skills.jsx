import SkillsCard from "./Cards/SkillsCard";


function Skills() {
  const cardData = [
    {
      heading: "Front-end",
      description:
        "Creating intuitive, responsive, and visually appealing user interfaces and experiences.",
      techAndTools: "HTML/CSS Javascript React NEXT.js",
    },
    {
      heading: "Back-end",
      description:
        "Designing and developing scalable, efficient, and secure server-side applications.",
      techAndTools: "Express Node.js",
    },
    {
      heading: "Database",
      description:
        "Managing, organizing, and optimizing databases for efficient data storage and retrieval.",
      techAndTools: "MySQL MongoDB",
    },
  ];

  return (
    <div className="bg-light text-dark px-5">
      <div className=" ">
        <div className="text-center mb-20">
          <p className="font-bold text-3xl">Skills</p>
          <p className="text-sm">where I&lsquo;m proficient</p>
        </div>
        <div className="max-w-5xl mx-auto flex md:flex-wrap max-md:flex-col justify-around">
          {cardData.map(({ heading, description, techAndTools }) => (
            <SkillsCard
              key={heading}
              heading={heading}
              description={description}
              techAndTools={techAndTools}
            />
          ))}
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
  );
}

export default Skills;
