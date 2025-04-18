import React from "react";
import Logo from '../assets/Vector 1.png'
import Logo2 from '../assets/MANTGLO.png'

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#F1F1F1] z-50 py-3 pb-0 px-8 flex justify-between items-center shadow-lg">
            <div className="flex-wrap items-center max-w-7xl pl-3">
                <img
                    src={Logo}
                    alt="Mantglo Logo"
                    className="px-7 h-10 mb-1"
                />
                <img src={Logo2} alt="Mantglo Logo" className="w-25" />
                <span className="font-bold text-lg ml-2"></span>
            </div>
            <ul className="flex space-x-6 text-black text-lg font-medium pr-20">
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