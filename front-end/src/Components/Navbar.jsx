import React, { useState } from "react";

function Navbar() {
  const [Toggle, setToggle] = useState(false);

  const chageToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full z-10 fixed  shadow-black text-light bg-dark ">
      <nav className="relative shadow-black">
        <div className='flex w-full p-3 border border-transparent rounded-lg shadow-md'>
          <div className="container mx-auto flex justify-end">
            {/* <div className="border-0 p-1 rounded-lg drop-shadow-lg backdrop-blur-sm">
              <a
                className=" text-light hover:text-blue-200 text-2xl font-bold"
                href="/general"
              >
                Yash Suthar
              </a>
            </div> */}
            <div
              className=" max-md:hidden text-xl font-s font-bold mx-auto tracking-wider"
            >
              <ul className="w-full flex mx-2 border-0 p-2 rounded-lg drop-shadow-lg backdrop-blur-sm">
                <li className="mr-12">
                  <a
                    className="text-moderate"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-12">
                  <a className=" hover:text-moderate" href="/About">
                    About Me
                  </a>
                </li>
                <li className="mr-12">
                  <a className=" hover:text-moderate" href="/Portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="mr-12">
                  <a className=" hover:text-moderate" href="/Contact">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
            <button
              className=" text-black md:hidden bg-blue w-8 h-8 border-0 rounded-md p-1 my-auto"
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

        {Toggle && (
          <div className="absolute right-2 w-32 border-0  rounded-xl mt-2 bg-gray">
            <div
              className=" text-sm font-bold mx-auto"
              id="navbarSupportedContent"
            >
              <ul className="flex flex-col mx-2 border-0 p-2 rounded-lg drop-shadow-lg backdrop-blur-sm">
                <li className="mr-12 border-b-2">
                  <a
                    className="text-moderate"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-12 border-b-2">
                  <a className=" hover:text-moderate" href="/entertainment">
                    About Me
                  </a>
                </li>
                <li className="mr-12 border-b-2">
                  <a className=" hover:text-moderate" href="/general">
                    Portfolio
                  </a>
                </li>
                <li className="mr-12 border-b-2">
                  <a className=" hover:text-moderate" href="/technology">
                    Contact Me
                  </a>
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
