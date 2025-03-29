import Inicio from './components/Inicio'
import Servicios from './components/Servicios'


const services = [
  {
    title: "Diagnóstico de fallas",
    image: "../public/image 3.png",
    description: "Realizamos un análisis detallado para identificar problemas en los motores.",
  },
  {
    title: "Mantenimiento preventivo",
    image: "../public/image 4.png",
    description: "Ofrecemos planes de mantenimiento para evitar fallos inesperados.",
  },
  {
    title: "Reparaciones de motores",
    image: "../public/image 10.png",
    description: "Servicio de reparación y optimización de motores diésel.",
  },
  {
    title: "Soporte técnico",
    image: "../public/image 11.png",
    description: "Asesoría técnica para optimizar el rendimiento de tu maquinaria.",
  },
];


function App() {

  return (
    <div className='bg-[#f1f1f1]'>
      <Inicio />
      <Servicios services={services}/>
    </div>
  )
}

export default App
