import React from "react";
import Logo from '../assets/Vector 1.png'
import Logo2 from '../assets/MANTGLO.png'

const Navbar = () => {
    return (
        <nav className="py-3 px-8 flex justify-between items-center">
            <div className="flex-wrap items-center">
                <img
                    src={Logo}
                    alt="Mantglo Logo"
                    className="px-7 h-10 mb-1"
                />
                <img src={Logo2} alt="Mantglo Logo" className="w-25" />
                <span className="font-bold text-lg ml-2"></span>
            </div>
            <ul className="flex space-x-6 text-black font-medium pr-30">
                <li>
                    <a href="#inicio" className="hover:text-gray-500">Inicio</a>
                </li>
                <li>
                    <a href="#servicios" className="hover:text-gray-500">Servicios</a>
                </li>
                <li>
                    <a href="#nosotros" className="hover:text-gray-500">Nosotros</a>
                </li>
                <li>
                    <a href="#proyectos" className="hover:text-gray-500">Proyectos</a>
                </li>
                <li>
                    <a href="#contacto" className="hover:text-gray-500">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

















{/*import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src="" alt="logo" />
            </div>
            <ul className='list'>
                <li className='list-item'><a href="#inicio">Inicio</a></li>
                <li className='list-item'><a href="#servicios">Servicios</a></li>
                <li className='list-item'><a href="#nosotros">Nosotros</a></li>
                <li className='list-item'><a href="#proyectos">Proyectos</a></li>
                <li className='list-item'><a href="#contacto">Constacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
*/}
