import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from "../../assets/img/hero-slider-1.jpg";
import hero2 from "../../assets/img/hero-slider-2.jpg";
import hero3 from "../../assets/img/hero-slider-3.jpg";

function HeroCarousel() {
  const images = [hero1, hero2, hero3];

  return (
    
<div className="relative w-full min-h-[350px] md:min-h-[450px] flex items-center">

  {/* Teal Background Rectangle */}
  <div className="absolute right-0 top-[8%] w-[55%] h-[85%] bg-[#0d6b68]">
  </div>

  {/* Image Carousel */}
  <div className="relative z-10 w-[80%] md:w-[78%]">

    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      speed={800}
      className="hero-swiper"
    >

      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Interior design ${index + 1}`}
            className="w-full h-65.5 md:h-80 object-cover"
          />
        </SwiperSlide>
      ))}

    </Swiper>

  </div>

</div>

  );
}

export default HeroCarousel;
