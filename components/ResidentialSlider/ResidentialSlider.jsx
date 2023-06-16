import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import slide from '../../assets/slideOne.jpg'
import slideTwo from '../../assets/slideTwo.jpg'
import slideThree from '../../assets/slideThree.jpg'
import slideFour from '../../assets/slideFour.jpg'
import Image from "next/image";


export default function ResidentialSlider() {
  return (
      <Swiper
        slidesPerView={3}
        spaceBetween={false}
        centeredSlides={true}
        navigation={true}
        speed={900}
        loopedSlides={2}
        loop={true}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination,  Navigation]}
        simulateTouch={false}
        breakpoints = {{
          0: {
            slidesPerView: 1,
            loopedSlides: 1,
            simulateTouch: true
          },
          691: {
            slidesPerView: 3,
            loopedSlides: 2,
            simulateTouch: true
          }
        }}
        className="residential__slider"
      >
        <SwiperSlide>
          <Image src={slide} alt='slide'placeholder="blur"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideTwo} alt='slide'placeholder="blur"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideThree} alt='slide'placeholder="blur"/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slideFour} alt='slide'placeholder="blur"/>
        </SwiperSlide>
      </Swiper>
  );
}
