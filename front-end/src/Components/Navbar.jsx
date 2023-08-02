import { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";

function Navbar() {
  const [change, setChange] = useState(0);

  const handleScroll =() =>{
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight ;
    const percentage = (scrollY/maxScroll)*100;

    setChange(percentage);
  }

  useEffect(() => {
    const handleScrollThrottle = () => {
      requestAnimationFrame(handleScroll);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScrollThrottle);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScrollThrottle);
    };
  },[]);

  const [Toggle, setToggle] = useState(false);

  const chageToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <nav>
      <div className="fixed w-screen shadow-gray-900 shadow-md text-white bg-gradient-to-r from-slate-800 to-slate-600 border-700 z-20 bg-dark">
        <div className="z-10 flex w-full py-1 px-3 border border-transparent rounded-lg shadow-md">
          <div className="container mx-auto flex justify-between">
            <div className="my-auto">
              <p className="font-bold text-lg cursor-default">
                ｛ Yash Suthar ｝
              </p>
              {/* <p className="font-bold text-lg cursor-default">
                {change.toFixed(2)}%
              </p> */}
            </div>
            <div className=" max-md:hidden text-md font-bold mx-auto">
              <ul className="w-full flex mx-2 border-0 p-2 rounded-lg drop-shadow-lg text-gray-400">
                <li className="mr-6 cursor-pointer">
                  <Link
                    className="text-light"
                    title="home page"
                    aria-current="page"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-6 cursor-pointer">
                  <Link
                    className=" hover:text-light"
                    title="about me"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Me
                  </Link>
                </li>
                <li className="mr-6 cursor-pointer">
                  <Link
                    className=" hover:text-light"
                    title="portfolio"
                    to="project-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="mr-6 cursor-pointer">
                  <Link
                    className=" hover:text-light"
                    title="contact page"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="md:hidden bg-moderate w-8 h-8 border-0 rounded-md p-1 my-auto"
              onClick={chageToggle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        {Toggle && (
          <div
            className={`mt-1 overflow-hidden transition-all transition-max-height duration-4000 ease-in-out border-2 border-gray-900 md:invisible visible w-64 rounded-xl absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-slate-800 to-gray-700`}
          >
            <div className=" text-s font-bold mx-auto">
              <ul className="flex flex-col mx-2 my-10 z-0 justify-between h-40 border-0 p-2 rounded-lg text-light">
                <li className="mr-6">
                  <Link
                    className=" hover:text-moderate"
                    title="portfolio"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    className=" hover:text-moderate"
                    title="portfolio"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About Me
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    className=" hover:text-moderate"
                    title="portfolio"
                    to="project-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="mr-6">
                  <Link
                    className=" hover:text-moderate"
                    title="portfolio"
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      <div className=""></div>
      <img
        id="nav-plane"
        src="https://www.svgrepo.com/show/167852/overhead-cable-car.svg"
        alt="airplane"
        className=" block h-8 md:h-12 fixed z-10"
        draggable="false"
        style={{ left: `${change}%`, top: "40px" }}
      />
    </nav>
  );
}

export default Navbar;
