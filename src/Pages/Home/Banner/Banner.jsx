import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { A11y, FreeMode, Pagination, Autoplay } from "swiper";

import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderButton from "./SliderButton";

//  Slider object
const slider = [
  {
    id: 1,
    image:
      "https://as2.ftcdn.net/v2/jpg/02/68/55/43/1000_F_268554358_1FwZPPjpiihBWHWdqUCMEYWgGXPJ4UZw.jpg",
    title: "Barbie Doll",
    subtitle:
      "Barbie is the most popular doll in the world, and for good reason. She's stylish, fashionable",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/featured/?doll",
    title: "American Girl Doll",
    subtitle:
      "American Girl dolls are beloved by children all over the world. They're not just toys, they're friends.",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/featured/?doll",
    title: "Lego Friends Dolls",
    subtitle:
      "Lego Friends dolls are the perfect way for kids to express their creativity. With their unique designs  ",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/featured/?doll",
    title: "Disney Princess Dolls",
    subtitle:
      "Disney Princess dolls are a dream come true for any little girl. With their beautiful dresses ",
  },
];

const Banner = () => {
  const swiper = useRef(null);
  const handleNextSlideClick = () => {
    // call swiper instance's slideNext() method
    swiper.current.swiper.slideNext();
  };
  const handlePrevSlideClick = () => {
    // call swiper instance's slidePrev() method
    // console.dir(swiper.current);
    swiper.current.swiper.slidePrev();
  };

  return (
    <div className="relative py-6 px-2 rounded-lg group">
      <Swiper
        onInit={(swiper) => {
          // console.log("init");
        }}
        onSlideChange={(swiper) => {
          // console.log("slide change");
        }}
        ref={swiper}
        modules={[Pagination, Autoplay, FreeMode, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        loop={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
      >
        {slider.map((slide) => (
       
            <SwiperSlide key={slide.id}>
              <div className="h-[80vh] relative z-10 rounded-lg">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full object-cover w-full rounded-lg"
                />
                <div className="px-2 sm:px-4 rounded-lg absolute w-full   mx-auto sm:mx-0 z-50 h-full  top-0 left-0 flex items-center justify-evenly text-center flex-wrap">
                  <div className="w-44 h-44 text-2xl font-bold flex items-center justify-center rounded-full bg-slate-300/75 animate-bounce p-2">
                    {slide.title}
                  </div>
                  <div className="w-72 h-72 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500/75 via-purple-500/50 to-pink-500 border-2 border-dashed border-indigo-800 animate-spin-slow p-4">
                    <div className="animate-spin-slow text-white" style={{
                        animationDirection:"reverse"
                    }}>{slide.subtitle}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
        ))}
      </Swiper>
      <SliderButton label="prev" onClick={handlePrevSlideClick} />
      <SliderButton label="next" onClick={handleNextSlideClick} />
    </div>
  );
};

export default Banner;
