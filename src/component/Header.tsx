import { useState } from "react";
import { BsList } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

function Header() {
    const [display, setDisplay] = useState(false);

    const handleToggleClick = () => {
        setDisplay(!display)
    }

  return (
    <header className="">
        <div className="min800:flex min800:justify-between min800:max-w-4xl min800:my-0 min800:mx-auto">
            <div className=" flex justify-between items-center">
                <div className="p-2 grid max800:grid-cols-1cxlmax min800:grid-cols-1cxlmin">
                    <Link to="/koala_clone">
                        <img src="./src/assets/homepage/koala_white_text.png" alt="Koala_logo" />
                    </Link>
                </div>
                <div className="p-2 min800:hidden" onClick={handleToggleClick}>
                    <BsList className="text-2xl"/>
                </div>
            </div>
            <nav className={`${display ? "grid" : "hidden"} max800:mt-5 min800:flex min800:items-center`}>
                <ul className="min800:flex min800:items-center max800:text-center">
                    <li className="flex ">
                        <NavLink to="security" onClick={handleToggleClick} className="w-full p-2">Security</NavLink>
                    </li>
                    <li className="flex max800:mt-2">
                        <a href="http://localhost:5174/" onClick={handleToggleClick} className="w-full p-2">Support</a>
                    </li>
                    <li className="flex max800:mt-2">
                        <NavLink to="news" onClick={handleToggleClick} className="w-full p-2">News</NavLink>
                    </li>
                    <li className="flex max800:mt-2">
                        <NavLink to="swag" onClick={handleToggleClick} className="w-full p-2">Swag</NavLink>
                    </li>
                    <li className="flex max800:mt-2 max800:grid max800:justify-center min800:ml-2">
                        <NavLink to="download" onClick={handleToggleClick} className="mycss border-2 border-solid border-transparent rounded-full w-36 p-2 grid justify-center">
                            <button>Download App</button>
                        </NavLink>
                        {/* <button className="mycss mt-5 border-2 border-solid border-transparent rounded-full w-36 p-3">
                            <Link to="download" className=" font-bold">Download App</Link>
                        </button> */}
                    </li>
                </ul>
            </nav>
        </div>

    </header>
  )
}

export default Header