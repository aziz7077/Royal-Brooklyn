import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper";
import slide from '../../assets/slideLandscapingOne.jpg'
import slideTwo from '../../assets/slideLandscapingTwo.webp'
import slideThree from '../../assets/slideLandscapingThree.jpg'
import slideFour from '../../assets/slideLandscapingFour.jpg'
import Image from "next/image";


export default function LandscapingSlider() {
  return (
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        navigation={true}
        speed={900}
        loopedSlides={2}
        loop={true}
        pagination = {{
          clickable: false
        }}
        modules={[ Navigation, Pagination]}
        simulateTouch={false}

        breakpoints= {{
          0: {
            slidesPerView: 1,
            loopedSlides: 1,
            simulateTouch: true
          },
          801: {
            slidesPerView: 3,
            loopedSlides: 2,
            simulateTouch: true
          },

        }}
        className="landscaping__slider"
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
