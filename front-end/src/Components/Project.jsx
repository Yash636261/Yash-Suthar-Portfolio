import ProjectCards from "./Cards/ProjectCards";
import { Element } from 'react-scroll'

function Project() {
  const cardData = [
    {
      image:
        "https://th.bing.com/th/id/R.bb81017ace8cbaed9fcbb88cf2280cba?rik=ynMEw4fmarRg6A&riu=http%3a%2f%2fwww.designlab.net.au%2fwp-content%2fuploads%2fproject-manager-roll.jpg&ehk=z2LJ5lHVsEqDlj%2bhovdvyWlj8QRIqvGLVZ0%2btxmjEOU%3d&risl=&pid=ImgRaw&r=0",
      heading: "BookBuddy",
      description:
        "BookBuddy is a versatile library management system that caters to both students and authors. It offers an intuitive interface for easy book search by title, author, or genre. Users can borrow books through BookBuddy and conveniently check the due dates and details of borrowed books. With BookBuddy, managing library transactions and accessing book.",
      github: "https://github.com/Yash636261/BookBuddy",
      link: "glittery-raindrop-63e8eb.netlify.app/",
    },
    {
      image:
        "",

      heading: "NewsHub",
      description:
        "NewsHub is a news app created using React.js and TailwindCss to provide latest news category wise to users.",
      github: "https://github.com/Yash636261/NewsHub",
      link: "",
    },
    {
      image:
        "https://efc.web.unc.edu/wp-content/uploads/sites/2607/2016/05/project-management-copy.png",

      heading: "Database",
      description:
        "Managing, organizing, and optimizing databases for efficient data storage and retrieval.",
      github: "",
      link: "",
    },
  ];
  return (
    <Element id="project-section" className="bg-light text-dark py-24">
      <div>
        <div className="text-center mb-20">
          <p className="font-bold text-3xl">Projects</p>
          <p className="text-sm">what I have done.</p>
        </div>

        <div className="flex justify-around items-center flex-wrap max-w-4xl mx-auto">
          {cardData.map(({ image, heading, description,github , link }) => (
            <ProjectCards
            key={heading}
              image={image}
              heading={heading}
              description={description}
              github={github}
              link={link}
            />
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Project;
