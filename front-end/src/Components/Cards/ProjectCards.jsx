import PropTypes from "prop-types";

function ProjectCards({ image, heading, description }) {
  const updatedDesc = description.split(" ").slice(0, 10).join(" ");
  return (
    <div>
      <div className="w-64 m-4 border border-gray-200 rounded-lg shadow ">
        <a href="#"  title="project image">
          <img className="rounded-t-lg object-contain" src={image} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">{heading}</h5>
          <p className=" font-normal ">{updatedDesc}...</p>
        
        <div className=" flex flex-row">
          <div className="flex font-bold mt-1">
            <a href="" title="github" className="flex items-center my-5 bg-[#28a745] text-light py-2 px-4 text-sm font-semibold border rounded-md hover:shadow-lg">
              <span className="mr-2">GitHub</span>
              <span
                className={` transition duration-500 hover:translate-x-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.75em"
                  viewBox="0 0 448 512"
                  fill="currentcolor"
                  className="h-6 w-6 y-5"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex font-bold mt-1 mx-auto">

            <a href=""  title="live link" className="flex items-center my-5  bg-moderate text-light py-2 px-4 text-sm font-semibold border rounded-md hover:shadow-lg">
              <span className="mr-2">Live</span>
              <span
                className={` transition duration-500 hover:translate-x-2`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="0.75em"
                  viewBox="0 0 448 512"
                  fill="currentcolor"
                  className="h-6 w-6 y-5"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCards;
