import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import "./Footer.css"

function Footer() {
  return (
    <footer className="grid mt-5 bg-blue-700 p-6 border-2 border-solid border-transparent rounded-2xl min800:max-w-4xl min800:my-0 min800:mx-auto min800:mt-14">
        <div className="">

            {/*Social handles */}
            <div className="min800:flex min800:items-center min800:justify-between">
                <div className=" grid justify-center max800:grid-cols-1cxlmax min800:grid-cols-1cxlmin">
                    <img src="./src/assets/homepage/koala_white_text.png" alt="" />
                </div>
                <div className="max800:mt-4 min800:mt-0">
                    <ul className="flex justify-center gap-x-6 ">
                        <a href="https://www.instagram.com/koalawalletio/" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-2xl ">
                            <li><FaInstagram /></li>
                        </a>
                        <a href="https://www.tiktok.com/@koalawallet" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-xl ">
                            <li><FaTiktok /></li>
                        </a>
                        <a href="https://www.youtube.com/@koalawallet" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-xl ">
                            <li><FaYoutube /></li>
                        </a>
                        <a href="https://twitter.com/koalawallet" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-xl ">
                            <li><FaXTwitter /></li>
                        </a>
                        <a href="https://t.me/koalawallet" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-xl ">
                            <li><PiTelegramLogoLight /></li>
                        </a>
                        <a href="https://discord.com/invite/koalawallet" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-xl ">
                            <li><FaDiscord /></li>
                        </a>
                        <a href="https://medium.com/@koalawallet" target="_blank" rel="noopener noreferrer" className=" text-lg min500:text-xl ">
                            <li><FaMedium /></li>
                        </a>
                    </ul>
                </div>
            </div>

            <hr className="max800:mt-6 min800:mt-10 opacity-40"/>
            {/* Copyright | Powered by | Privacy */}
            <div className="myfootercss max800:mt-4 min800:grid min800:grid-cols-3 min800:mt-12 min800:grid-rows-1">

                <div className="min800:grid min800:justify-end min800:col-start-3">
                    <ul className="max800:grid max800:justify-center max800:text-center min800:flex min800:gap-2">
                        <Link to="">
                            <li>Assets</li>
                        </Link>
                        <Link to="media">
                            <li>Media Kit</li>
                        </Link>
                        <Link to="privacy">
                            <li>Privacy Policy</li>
                        </Link>
                    </ul>
                </div>

                <div className="max800:flex max800:justify-center max800:mt-3 min800:flex min800:justify-center min800:mt-0 min800:col-start-2 min800:row-start-1">
                    <p className=" opacity-70">Inspired by </p>
                    <Link to="/" className="ml-1">
                        <p>Koala</p>
                    </Link>
                </div>

                <div className="max800:text-center min800:grid min800:justify-start min800:col-start-1 min800:row-start-1">
                    <p >
                        <span className="opacity-70">Copyright © 2024</span>
                        <span className="ml-1"><Link to="https://github.com/InternetOG">InternetOG</Link>
                        </span>
                    </p>
                </div>

            </div>

        </div>
    </footer>
  )
}

export default Footer