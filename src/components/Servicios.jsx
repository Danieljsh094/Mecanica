import React from 'react'
import ServiceCards from './ServiceCards'

const Servicios = ({ services }) => {
    return (
        <>
            <section className='flex flex-col text-left align-center mt-20 px-40'>
                <h1 className="text-3xl font-bold mb-10">Nuestros Servicios</h1>
                <h2 className='text-2xl max-w-2xl mb-10'>Contamos con los servicios necesarios para cubrir tus necesidades.</h2>
                <p className='max-w-2xl'>Ofrecemos mantenimiento y reparación de motores díesel, garantizando un rendiemiento óptimo y duradero. Nuestro equipo está especializado en:</p>
                <div className='flex flex-nowrap gap-6 justify-center p-10'>
                    {services.map((service, index) => (
                        <ServiceCards key={index} {...service} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Servicios
