// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import SectionTitle from "../../../Share/SectionTitle/SectionTitle";
import { FaCartPlus, FaEye, FaHeart } from "react-icons/fa";
import Loading from "../../../Share/Loading/Loading";

export default function Gallery({ dolls, loading }) {
  return (
    <>
      <SectionTitle
        title="All Dolls Gallery "
        subtitle={"you will find all dolls in this gallery slider"}
      />
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {dolls.map((doll) => (
            <SwiperSlide key={doll._id}>
              <div className="relative group overflow-hidden shadow-2xl rounded-3xl">
                <img
                  src={doll.picture}
                  alt=""
                  className=" object-cover h-[400px] w-full"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 "></div>{" "}
                <button className="bg-blue-500 text-white  py-2 px-4 rounded-full transition-all duration-700 absolute left-1/2 -translate-x-1/2 -bottom-full group-hover:bottom-4 flex items-center justify-between gap-3">
                  View <FaEye />
                </button>
                <div className="transition-all duration-700 absolute top-4 -right-full group-hover:right-4  flex items-center flex-col gap-2">
                  <button className="bg-white text-blue-500  w-12 h-12 shadow shadow-blue-300 py-2 px-4 rounded-full  flex items-center justify-between gap-3">
                    <FaCartPlus />
                  </button>
                  <button className="bg-white text-blue-500 w-12 h-12 shadow shadow-blue-300  py-2 px-4 rounded-full flex items-center justify-between gap-3">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
