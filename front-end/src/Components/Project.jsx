import ProjectCards from "./Cards/ProjectCards";

function Project() {
  const cardData = [
    {
      image:
        "https://blog.hubbado.com/content/images/2020/01/projectmanager.png",
      heading: "Front-end",
      description:
        "Creating intuitive, responsive, and visually appealing user interfaces and experiences.",
    },
    {
      image:
        "https://blog.hubbado.com/content/images/2020/01/projectmanager.png",

      heading: "Back-end",
      description:
        "Designing and developing scalable, efficient, and secure server-side applications.",
    },
    {
      image:
        "https://blog.hubbado.com/content/images/2020/01/projectmanager.png",

      heading: "Database",
      description:
        "Managing, organizing, and optimizing databases for efficient data storage and retrieval.",
    },
  ];
  return (
    <div className="bg-light text-dark py-24">
      <div>
        <div className="text-center mb-20">
          <p className="font-bold text-3xl">Projects</p>
          <p className="text-sm">what I have done.</p>
        </div>

        <div className="flex justify-around items-center flex-wrap max-w-4xl mx-auto">
          {cardData.map(({ image, heading, description }) => (
            <ProjectCards
            key={heading}
              image={image}
              heading={heading}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
