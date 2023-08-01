import PropTypes from "prop-types";

function SkillsCard({ heading, description, techAndTools }) {
  const TechArray = techAndTools;

  return (
    <div className="mx-auto my-5 w-64 p-5 border border-gray-200 rounded-lg shadow-md overflow-hidden  transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-700 bg-gray-100">
      <p className="font-bold text-xl md:text-2xl mb-2">{heading}</p>
      <p className="text-gray-700 text-base md:text-lg mb-4">{description}</p>
      <ul className="text-center text-sm md:text-base">
        {TechArray.map((word) => (
          <li
            key={word}
            className="my-1 py-1 px-2 bg-gray-200 rounded-lg inline-block mx-1"
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}

SkillsCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techAndTools: PropTypes.array.isRequired,
};

export default SkillsCard;
