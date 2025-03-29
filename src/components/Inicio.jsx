import React from 'react'
import Navbar from './Navbar'
import Carrusel from './Carrusel'

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
        <button className="px-6 py-3 bg-[#1f3547] text-white font-medium rounded-md hover:bg-[#3e586e] transition flex items-center gap-2 cursor-pointer border-none">
          Solicitar <span>↗</span>
        </button>
      </section>
    </>
  )
}

export default Inicio