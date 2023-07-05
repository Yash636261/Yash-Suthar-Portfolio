import PropTypes from "prop-types";

function ProjectCards({ image, heading, description }) {
    const updatedDesc = description.split(" ").slice(0,10).join(" ");
  return (

    <div>
      <div className="w-64 m-4 border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="rounded-t-lg object-contain" src={image} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">{heading}</h5>
          <p className="mb-3 font-normal ">{updatedDesc}...</p>
        </div>
      </div>
    </div>
  );
}

ProjectCards.propTypes={
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ProjectCards;
