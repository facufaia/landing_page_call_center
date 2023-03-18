import { NavLink } from "react-router-dom"
import logo from "./logo.png"

function NavBar(){
    return(
        <ul className="flex justify-center items-center h-8 gap-7 text-xs fixed z-40 bg-white w-full text-gray-700">
            <li><NavLink activeclassname="active" to="/">HOME</NavLink></li>
            <li><NavLink to="/quienes-somos">QUIENES SOMOS</NavLink></li>
            <img src={logo} alt="brand logo" className="w-6"/>
            <li><NavLink to="/seguridad-legal">SEGURIDAD LEGAL</NavLink></li>
            <li><NavLink to="/contacto">CONTACTO</NavLink></li>
        </ul>
    )
}

export default NavBar