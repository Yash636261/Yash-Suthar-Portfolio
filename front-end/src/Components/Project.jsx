import ProjectCards from "./Cards/ProjectCards";
import { Element } from 'react-scroll/modules';

function Project() {
  const cardData = [
    {
      image:
        "https://private-user-images.githubusercontent.com/98970491/305068407-588225c5-3942-481e-8b8e-4dd8cd2c98c2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkxMTA2NDEsIm5iZiI6MTcwOTExMDM0MSwicGF0aCI6Ii85ODk3MDQ5MS8zMDUwNjg0MDctNTg4MjI1YzUtMzk0Mi00ODFlLThiOGUtNGRkOGNkMmM5OGMyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjI4VDA4NTIyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU3MzA0ZjY0ZTZmMjQ2YTlmNzBiNWMxZjIwYTU0YThiYmIzMTUxMTU0NmUxZTIyNWM5ODRjNDE4NzFjNTgzYjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.twZhtWNSBNVEs-k9esKG6d3SW-uQx2DcfgTuNaIezag",
      heading: "MedVault",
      description:
        "MedVault is an advanced patient data management system designed to ensure data security, accessibility, interoperability, and privacy protection within the healthcare ecosystem. It serves as a reliable partner in managing secure health data, providing essential features for healthcare providers and patients.",
      github: "https://github.com/Yash636261/MedVault",
      link: "https://med-vault-ten.vercel.app/",
    },
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
    {
      image:
        "https://user-images.githubusercontent.com/98970491/259052816-35adaa4a-ed0e-43ee-8e1b-94376927e9f3.png",

      heading: "ProjectPulse",
      description:
        "ProjectPulse is a Project Managment web tool which is created to make easier to work in team during projects.",
      github: "https://github.com/Yash636261/ProjectPulse",
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

        <div className="flex justify-center flex-wrap max-w-4xl mx-auto">
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
