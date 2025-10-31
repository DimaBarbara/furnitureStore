import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sliderData from "../../data/heroData";
import Circle from "./Circle";

const SwiperSlider: React.FC = () => {
  return (
    <div style={{ maxWidth: "1440px", maxHeight: "469" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{ delay: 7000, disableOnInteraction: false }}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <img
              src={item.imageUrl}
              alt={item.altText}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute flex flex-col top-17 left-64 text-start">
              <div className="!mb-10 max-w-120">
                <h2 className="font-second font-bold text-[38px] leading-[127%] tracking-[-0.01em] uppercase text-white !mb-5">
                  {item.title}
                </h2>
                <p className="font-primary font-bold text-lg leading-[127%] tracking-[-0.03em] text-white !mb-5">
                  {item.subtitle}
                </p>
                <p className="font-normal decoration-skip-ink-none text-white">
                  {item.description}
                </p>
              </div>
              <Circle data={item.circles} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
