/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll/modules";

function About() {
  return (
    <Element
      id="about-section"
      className="relative bg-light text-dark py-24 px-10 mt-10"
    >
      {/* <div className="absolute max-md:invisible bg-red-400 rounded-full right-36 top-[35vh] w-72 h-72 filter blur-2xl opacity-40 animate-blob mix-blend-multiply "></div>
        <div className="absolute max-md:invisible bg-blue-700 rounded-full right-72 top-[35vh] w-72 h-72 filter blur-2xl opacity-40 animate-blob mix-blend-multiply animation-delay-2000"></div>
        <div className="absolute max-md:invisible bg-green-700 rounded-full right-56 top-[45vh] w-72 h-72 filter blur-2xl opacity-40 animate-blob mix-blend-multiply animation-delay-4000"></div> */}
      <div className="text-center mb-20">
        <p className="font-bold text-3xl">About</p>
        <p className="text-sm">My introduction</p>
      </div>
      <div className=" max-w-3xl mx-auto flex flex-col lg:flex-row-reverse justify-around items-center my-auto">
        <div className="ml-4 my-10 z-10">
          <img
            className="border rounded-full w-64"
            src="https://avatars.githubusercontent.com/u/98970491?v=4"
            alt="profileimage"
          />
        </div>
        <div className="my-10">
          <p className="max-w-lg text-xl text-center font-medium lg:mr-4">
            I am Yash Suthar, a dedicated Full Stack Developer deeply involved
            in the world of open-source contribution. Over time, I've actively
            engaged in various hackathons, meetups, and tech events, leveraging
            these platforms not only to enhance my own skills but also to mentor
            and guide aspiring developers within the community.
          </p>
        </div>
      </div>
    </Element>
  );
}

export default About;
