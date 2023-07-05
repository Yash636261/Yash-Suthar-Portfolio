

function ServiceCards(props) {
  return (
    <div>
        <div className="w-36 h-36 p-3 border border-blue-500 rounded-lg bg-moderate text-dark my-4 hover:shadow-md hover:shadow-gray-500">
            <p className="font-semibold text-base mb-8">{props.heading}</p>
            {/* <a className="font-medium text-sm text-light" href="">Know more-&gt; </a> */}
        </div>
    </div>
  )
}



export default ServiceCards
