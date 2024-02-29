import { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";

function Navbar() {
  const [change, setChange] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Change the threshold value as needed
      const threshold = 200; // Pixels from the top to trigger the change

      setIsTransparent(scrollTop < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const percentage = (scrollY / maxScroll) * 100;

    setChange(percentage);
  };

  useEffect(() => {
    window.scrollX = 0;
    const handleScrollThrottle = () => {
      requestAnimationFrame(handleScroll);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScrollThrottle);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollThrottle);
    };
  }, []);

  const [Toggle, setToggle] = useState(false);

  const chageToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <nav>
      <div className="px-[2vw] pt-5 bg-primary fixed w-full z-30">
        <div
          className={`transition-all duration-200 ${
            isTransparent ? "bg-transparent" : "bg-slate-900"
          } py-2 border-gray-200 dark:bg-secondary rounded-2xl fixed w-[94vw] z-10`}
        >
          <div className="container mx-auto flex justify-between px-5">
            <div className="my-auto">
              <p className="font-bold text-lg cursor-default text-moderate">
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
              className="md:hidden bg-moderate w-8 h-8 border-0 rounded-md p-1 my-auto transition duration-500"
              onClick={chageToggle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {Toggle ? (
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#000000"
                      d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
                    ></path>
                  </g>
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {Toggle && (
          <div
            className={`mt-14 overflow-hidden transition-all transition-max-height duration-4000 ease-in-out border-2 border-gray-900 md:invisible visible w-60 rounded-xl absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-bl from-slate-800 to-gray-700`}
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
      {/* <img
        id="nav-plane"
        src="https://www.svgrepo.com/show/167852/overhead-cable-car.svg"
        alt="airplane"
        className=" block h-8 md:h-12 fixed z-10"
        draggable="false"
        style={{ left: `${change}%`, top: "40px" }}
      /> */}
    </nav>
  );
}

export default Navbar;
