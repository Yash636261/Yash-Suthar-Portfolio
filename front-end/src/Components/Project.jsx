import ProjectCards from "./Cards/ProjectCards";
import { Element } from 'react-scroll/modules';

function Project() {
  const cardData = [
    {
      image:
        "https://user-images.githubusercontent.com/98970491/257126745-a4543962-d52e-45f5-afa5-44e55e00e4e7.png",
      heading: "BookBuddy",
      description:
        "BookBuddy is a versatile library management system that caters to both students and authors. It offers an intuitive interface for easy book search by title, author, or genre. Users can borrow books through BookBuddy and conveniently check the due dates and details of borrowed books. With BookBuddy, managing library transactions and accessing book.",
      github: "https://github.com/Yash636261/BookBuddy",
      link: "https://glittery-raindrop-63e8eb.netlify.app/",
    },
    {
      image:
        "https://user-images.githubusercontent.com/98970491/257134924-c377e302-f5ba-4342-8e2b-12d5d46f8c23.png",

      heading: "NewsHub",
      description:
        "NewsHub is a news app created using React.js and TailwindCss to provide latest news category wise to users.",
      github: "https://github.com/Yash636261/NewsHub",
      link: "",
    },
    {
      image:
        "https://th.bing.com/th/id/R.bb81017ace8cbaed9fcbb88cf2280cba?rik=ynMEw4fmarRg6A&riu=http%3a%2f%2fwww.designlab.net.au%2fwp-content%2fuploads%2fproject-manager-roll.jpg&ehk=z2LJ5lHVsEqDlj%2bhovdvyWlj8QRIqvGLVZ0%2btxmjEOU%3d&risl=&pid=ImgRaw&r=0",

      heading: "Police Feedback System",
      description:
        "This is our First Hackathon Project (SSIP Hackathon) Just Deploying the project on Django",
      github: "https://github.com/Yash636261/Police-Feedback-System-SSIP-Hackathon",
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

        <div className="flex justify-around flex-wrap max-w-4xl mx-auto">
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
