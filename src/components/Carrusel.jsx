import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slides = [
  { src: "../../public/image 1.png", desc: "imagen1 carrusel" },
  { src: "../../public/image 2.png", desc: "imagen1 carrusel" },
  { src: "../../public/image 4.png", desc: "imagen1 carrusel" },
  { src: "../../public/image 5.png", desc: "imagen1 carrusel" },
  { src: "../../public/image 10.png", desc: "imagen1 carrusel" },
  { src: "../../public/image 11.png", desc: "imagen1 carrusel" },
];

const Carrusel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={2}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: false}}// Auto play con 3 segundos
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.desc}
              className="w-full h-80 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrusel;