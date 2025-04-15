import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <div className="row">
        <div className="col-xl-12 insta">
          <h2>Follow On Instagram </h2>
          <h5>Stay Connected Stay Inspired</h5>
        </div>
      </div>

      <Swiper
        slidesPerView={4} // Default for very small screens
        breakpoints={{
          
          768: { // For screens >= 768px
            slidesPerView: 4,
          },
          1024: { // For screens >= 1024px
            slidesPerView: 5,
          },
        }}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className="slideimg" src="images/lp1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp4.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp6.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp7.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="slideimg" src="images/lp9.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
