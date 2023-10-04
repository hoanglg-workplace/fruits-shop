import React from "react";
import testimonial_card_item1 from "../../assets/images/client.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SwiperSliderItems = [
  {
    id: 1,
    img: testimonial_card_item1,
    title: "Orange",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 2,
    img: testimonial_card_item1,
    title: "Grapes",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 3,
    img: testimonial_card_item1,
    title: "Gauva",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 4,
    img: testimonial_card_item1,
    title: "Orange",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 5,
    img: testimonial_card_item1,
    title: "Grapes",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 6,
    img: testimonial_card_item1,
    title: "Gauva",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 7,
    img: testimonial_card_item1,
    title: "Orange",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 8,
    img: testimonial_card_item1,
    title: "Grapes",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
  },
  {
    id: 9,
    img: testimonial_card_item1,
    title: "Gauva",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
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
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      {SwiperSliderItems.map((item) => (
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center py-10">
            <div className="w-80">
              <img src={item.img} alt="testimonial_card_item1" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-3xl py-2">{item.title}</h3>
              <p className="text-center px-10">{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Testimonial = () => {
  return (
    <section className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
      <div className="max-w-[1280px] w-full mx-auto p-4">
        <h2 className="text-center text-4xl font-bold">Testimonial</h2>
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
        <div>
          <div className="h-full relative">
            <SwiperSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
