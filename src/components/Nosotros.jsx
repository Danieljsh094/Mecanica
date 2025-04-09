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
                <div className='mt-30'>
                    <h1 className="text-4xl font-extrabold mb-20">Acerca de la empresa</h1>
                    <p className='font-medium text-lg max-w-3xl mb-20'>Desde 1998, hemos trabajado en más de 250 proyectos exitosos, contando con un equipo de 120 profesionales y 35 socios comerciales que confían en nuestra experiencia.</p>
                    <div className='group font-medium text-lg grid grid-cols-4 gap-x-30'>
                        <div className='space-y-1'>
                            <h2 className='text-4xl font-extrabold'>2015</h2>
                            <p>Año de Creacion</p>
                            <hr className='max-w-[60px]' />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-4xl font-extrabold'>250+</h2>
                            <p>Proyectos Realizados</p>
                            <hr className='max-w-[60px]' />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-4xl font-extrabold'>120</h2>
                            <p>Personal Profesional</p>
                            <hr className='max-w-[60px]' />
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-4xl font-extrabold'>34</h2>
                            <p>Socios Comerciales</p>
                            <hr className='max-w-[60px]' />
                        </div>
                    </div>
                    <div className='mt-30 text-2xl'>
                        <h1 className='font-extrabold'>Pedro Suarez Villar</h1>
                        <h3>Ingeniero Mecanico</h3>
                    </div>
                </div>
            </section>
            <div className='relative py-20 overflow-hidden'>
                {/* Triángulo inferior */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gray-300 [clip-path:polygon(0%_100%,100%_50%,100%_100%)]" />

                {/* Contenido centrado */}
                <div className="text-center relative z-10">
                    {/* Sombra de texto */}
                    <h2 className="text-4xl md:text-6xl font-bold text-black/20 blur-[3px] absolute left-1/3 bottom-5 -translate-x-30 -translate-y-2 pointer-events-none select-none">
                        De la mano con<br />marcas como:
                    </h2>

                    {/* Texto principal */}
                    <h2 className="text-4xl md:text-6xl font-black text-black relative">
                        De la mano con<br />marcas como:
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Nosotros