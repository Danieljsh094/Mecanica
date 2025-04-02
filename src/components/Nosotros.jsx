import React from 'react'

const Nosotros = () => {
    return (
        <>
            {/* Contenedor */}
            <section className='relative h-200 flex items-center px-20'>
                {/* Imagen de Fondo */}
                <div style={{ backgroundImage: "url('/image 4.png')" }} className="mt-30 bg-fixed overflow-hidden rounded-2xl absolute inset-0 bg-cover bg-center opacity-40">
                    {/* Capa de opacidad */}
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                {/* Contenido encima */}
                <div className='text-black'>
                    <h1 className="text-4xl font-extrabold">Acerca de la empresa</h1>
                    <p className=''>Desde 1998, hemos trabajado en más de 250 proyectos exitosos, contando con un equipo de 120 profesionales y 35 socios comerciales que confían en nuestra experiencia.</p>
                    <div className='grid grid-cols-4 gap-20'>
                        <div className=''>
                            <h2>2015</h2>
                            <p>Año de Creacion</p>
                            <hr />
                        </div>
                        <div>
                            <h2>250+</h2>
                            <p>Proyectos Realizados</p>
                            <hr />
                        </div>
                        <div>
                            <h2>120</h2>
                            <p>Personal Profesional</p>
                            <hr />
                        </div>
                        <div>
                            <h2>34</h2>
                            <p>Socios Comerciales</p>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <h1>Pedro Suarez Villar</h1>
                        <h3>Ingeniero Mecanico</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nosotros