import React from "react";

const Intro = () => {
  return (
    <div className="mt-24 flex">
      <div className="flex-col p-16 w-full ">
        <div className="text-6xl uppercase text-left">
          <p className="text-5xl my-2"> Hello,</p>
          <p className="text-blue-500 font-bold font-outlint-4 uppercase mt-5">
            I am yash suthar
          </p>
          <p className="text-4xl"> front-end developer</p>
        </div>
        <div className="text-left my-10">
          <button className="text-lg bg-blue-400 p-2 border-2 border-blue-800 rounded-3xl font-bold uppercase">
            download cv
          </button>
        </div>
      </div>
      {/* <div className="todo md:hiddem ">
        image
      </div> */}
    </div>
  );
};

export default Intro;
