import PropTypes from "prop-types";

function ServiceCards({service}) {
  return (
<div>
  <div className="w-48 h-48 p-4 border border-blue-500 rounded-lg bg-moderate text-dark my-6 shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-500">
    <p className="font-semibold text-lg mb-4">{service}</p>
    {/* <a className="font-medium text-sm text-light" href="">Know more-&gt; </a> */}
  </div>
</div>
  )
}

ServiceCards.prototype={
  service: PropTypes.string.isRequired,
}


export default ServiceCards
