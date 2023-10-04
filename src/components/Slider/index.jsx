import React from "react";
import "./Slider.scss";
import sliderImage from "../../assets/images/slide-img.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SwiperSliderItems = [
  {
    id: 1,
    img: sliderImage,
    title: "Welcome to",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 2,
    img: sliderImage,
    title: "Our Fruits Shop",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    img: sliderImage,
    title: "Welcome to Our Fruits Shop",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];
const SwiperSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      // navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      {SwiperSliderItems.map((item) => (
        <SwiperSlide>
          <div className="w-full h-full relative overflow-hidden after:block after:clear-both after:content-'' ">
            <div className="carousel-item h-full">
              <div className="w-full h-full">
                <div className="slider_item-container">
                  <div className="flex justify-between items-center max-w-[1280px] w-full mx-auto px-4">
                    <div className="flex flex-wrap flex-row max-md:flex-col justify-center items-center">
                      <div className="flex-[0,0,50%] max-w-[50%] max-md:flex-1 max-md:max-w-[100%]">
                        <div className="slider_item-detail max-md:text-center">
                          <div>
                            <h1 className="font-extrabold text-6xl w-full">
                              {item.title}
                            </h1>
                            <p className="my-11 mx-0 py-10 w-[85%] max-md:w-full max-md:py-0">
                              {item.text}
                            </p>
                            <div className="flex max-md:items-center max-md:justify-center">
                              <Link
                                to="/fruits"
                                className="uppercase custom_orange-button mr-3"
                              >
                                Shop Now
                              </Link>
                              <Link
                                to="/contact"
                                className="uppercase custom_dark-button"
                              >
                                Contact Us
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" flex-[0,0,50%] max-w-[50%] max-md:flex-1 max-md:max-w-[100%] max-md:mt-20">
                        <div className="w-[85%] m-auto max-md:w-[50%]">
                          <div>
                            <img
                              src={item.img}
                              alt="slide_img"
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Slider = () => {
  return (
    <section className="pt-[0%] h-[90vh] relative max-md:max-w-[600px] mx-auto">
      <div className="h-full relative">
        <SwiperSlider />
      </div>
    </section>
  );
};

export default Slider;
