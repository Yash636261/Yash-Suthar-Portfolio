import { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll/modules';


function Navbar() {
  const [Toggle, setToggle] = useState(false);

  const chageToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full fixed shadow-black text-light bg-dark border border-dark z-20">
      <nav>
        <div className="z-10 flex w-full p-2 border border-transparent rounded-lg shadow-md">
          <div className="container mx-auto flex justify-between">
            <div className="my-auto">
              <p className="font-bold text-lg cursor-default">｛ Yash Suthar ｝</p>
            </div>
            <div className=" max-md:hidden text-sm font-bold mx-auto">
              <ul className="w-full flex mx-2 border-0 p-2 rounded-lg drop-shadow-lg ">
                <li className="mr-6 cursor-pointer">
                  <Link className="text-moderate" title="home page" aria-current="page" to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                    Home
                  </Link>
                </li>
                <li className="mr-6 cursor-pointer">
                  <Link className=" hover:text-moderate" title="about me" to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                    About Me
                  </Link>
                </li>
                <li className="mr-6 cursor-pointer">
                  <Link className=" hover:text-moderate" title="portfolio"  to="project-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                    Portfolio
                  </Link>
                </li>
                <li className="mr-6 cursor-pointer">
                  <Link className=" hover:text-moderate" title="contact page"  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
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

        <div className=""></div>

        {Toggle && (<div
          className={`mt-1 overflow-hidden transition-all transition-max-height duration-4000 ease-in-out border-2 border-gray-900 md:invisible visible w-64 rounded-xl absolute left-1/2 transform -translate-x-1/2 bg-dark `}
        >
          <div className=" text-s font-bold mx-auto">
            <ul className="flex flex-col mx-2 my-10 z-0 justify-between h-40 border-0 p-2 rounded-lg text-light">
              <li className="mr-6">
                <Link className=" hover:text-moderate" title="portfolio"  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link className=" hover:text-moderate" title="portfolio"  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  About Me
                </Link>
              </li>
              <li className="mr-6">
                <Link className=" hover:text-moderate" title="portfolio"  to="project-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Portfolio
                </Link>
              </li>
              <li className="mr-6">
                <Link className=" hover:text-moderate" title="portfolio"  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
