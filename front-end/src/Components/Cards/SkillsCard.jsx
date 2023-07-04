import PropTypes from 'prop-types';

function SkillsCard({heading,description,techAndTools}) {

    const TechArray = techAndTools.split(" ");


  return (
  <div className="mx-auto my-5 w-64 p-5 border border-gray-400 rounded-lg shadow-lg">
  <p className="font-bold text-xl mb-2">{heading}</p>
  <p className="font-semibold text-base mb-4">{description}</p>
  <ul className="text-center text-sm">
    {TechArray.map((word) => (
      <li key={word} className="py-1">
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
    techAndTools: PropTypes.string.isRequired,
  };
  
export default SkillsCard
