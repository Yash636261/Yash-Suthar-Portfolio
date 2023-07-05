
function ProjectCards({ image, heading, description }) {
  return (
    <div>
      <div className="max-w-xs m-4 border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">{heading}</h5>
          <p className="mb-3 font-normal ">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
