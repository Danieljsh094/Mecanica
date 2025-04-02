import React from 'react'
import Navbar from './Navbar'
import Carrusel from './Carrusel'
import { ArrowRight } from "lucide-react";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <Carrusel />
      <section className="flex flex-col items-center justify-center h-130 px-6 text-center">
        <h1 className="text-3xl font-bold mb-10">MANTGLO S.A.S</h1>
        <p className="max-w-xl mb-10">
          Si buscas un servicio que garantice calidad, profesionalismo y un trabajo impecable, ¡somos tu mejor opción!
          Nos especializamos en brindar soluciones eficientes para motores diésel, asegurando un rendimiento óptimo y
          una vida útil más larga para tus vehículos y maquinaria.
        </p>
        <button className="group flex items-center gap-2 bg-[#1e3a56] text-white px-5 py-2 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-[#162b40] cursor-pointer">
          Solicitar <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </section>
    </>
  )
}

export default Inicio