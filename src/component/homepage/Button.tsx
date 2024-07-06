import { Link } from "react-router-dom"
import "./Button.css"

function Button() {
  return (
    <button className="mycss mt-5 border-2 border-solid border-transparent rounded-full w-36 p-3">
        <Link to="download" className=" font-bold">Download App</Link>
    </button>
  )
}

export default Button