
function ProjectCards(props) {
  return (
    <div>
        <div className="w-36 p-3 border rounded-md bg-moderate text-dark my-4">
            <p className="font-semibold text-base mb-8">{props.heading}</p>
            <a className="font-medium text-sm text-light" href="">Know more-&gt; </a>
        </div>
    </div>
  )
}

export default ProjectCards
