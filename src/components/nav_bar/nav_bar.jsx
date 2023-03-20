import { NavLink } from "react-router-dom"
import logo from "./logo.png"
import {GiHamburgerMenu} from "react-icons/Gi"
import {useRef, useState} from "react"
import {RxCross1} from "react-icons/Rx"

function NavBar(){

    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }
    const menu = useRef(null)
    return(
        <nav className="fixed w-full bg-white flex p-2 justify-between items-center z-20">
            <div className="flex justify-between w-40 items-center z-40">
                <img src={logo} alt="brand logo" className="w-9 h-9"/>
                <h2 className="text-2xl sm:text-lg w-max">JL McGuill</h2>
            </div>
            <div className={`${clicked ? "opacity-0 duration-100" : "duration-1000 opacity-100"} font-bold text-3xl z-40 transition-opacity ease-linear sm:hidden`} onClick={handleClick}>
                <GiHamburgerMenu/>
            </div>
            <div className={`${clicked ? "duration-1000 opacity-100" : "opacity-0 duration-100"} z-50 font-bold text-3xl absolute right-0 -translate-x-1.5 transition-opacity ease-linear sm:hidden`} onClick={handleClick}>
                <RxCross1/>
            </div>
            <ul ref={menu} className={`${clicked ? "top-0" : "-top-full"} fixed flex flex-col gap-7 bg-white w-full text-gray-700 h-screen text-2xl justify-center items-center -translate-x-2 bg-opacity-95 text-center z-30 transition-all ease-linear duration-500
            sm:flex-row sm:text-lg sm:relative sm:h-min`}>
                <li className="w-min h-min block"><NavLink activeclassname="active" to="/landing_page_call_center">HOME</NavLink></li>
                <li className="w-maxs h-min"><NavLink to="/quienes-somos">QUIENES SOMOS</NavLink></li>
                <li className="w-max h-min"><NavLink to="/seguridad-legal">SEGURIDAD LEGAL</NavLink></li>
                <li className="w-min h-min"><NavLink to="/contacto">CONTACTO</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar