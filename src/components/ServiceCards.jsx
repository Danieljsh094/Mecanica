const ServiceCard = ({ title, image, description }) => {
    return (
        <div className="relative group w-64 h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
            {/* Imagen de fondo */}
            <img src={image} alt={title} className="w-full h-full object-cover transition duration-300 group-hover:opacity-20 opacity-60" />

            {/* Título */}
            <div className="absolute inset-0 flex items-center justify-center text-black text-center font-bold text-lg transition duration-300 group-hover:opacity-0">
                {title}
            </div>

            {/* Contenido al hacer hover */}
            <div className="absolute inset-0 bg-gray-100 p-6 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-700 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
