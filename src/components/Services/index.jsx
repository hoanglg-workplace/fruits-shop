import React, { useState } from "react";
import "./Services.scss";
import service_card_item1 from "../../assets/images/card-item-1.png";
import service_card_item2 from "../../assets/images/card-item-2.png";
import service_card_item3 from "../../assets/images/card-item-3.png";

const ServicesItems = [
  {
    id: 1,
    img: service_card_item1,
    title: "Orange",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 2,
    img: service_card_item2,
    title: "Grapes",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    img: service_card_item3,
    title: "Gauva",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 4,
    img: service_card_item2,
    title: "Orange",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 5,
    img: service_card_item3,
    title: "Grapes",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 6,
    img: service_card_item1,
    title: "Gauva",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 7,
    img: service_card_item3,
    title: "Orange",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 8,
    img: service_card_item1,
    title: "Grapes",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 9,
    img: service_card_item2,
    title: "Gauva",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];
const Services = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
      //   const nextVisibleItems = visibleItems + 3;
      //   setVisibleItems(nextVisibleItems);
      setIsLoading(false);

      //   if (nextVisibleItems >= ServicesItems.length) {
      //     setIsLoading(true);
      //   }
    }, 500); // Delay for 1 second (1000 milliseconds)
  };

  return (
    <section className="w-full h-auto py-[2%] bg-white">
      <div className="max-w-[1280px] max-md:max-w-[600px] w-full mx-auto p-4">
        <h2 className="text-center text-4xl font-bold">Our Services</h2>
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>

        <div className="py-10 ">
          <div className="grid grid-cols-3 max-md:grid-cols-1">
            {ServicesItems.slice(0, visibleItems).map((item) => (
              <div key={item.id} className="card m-2">
                <img
                  className="card-img-top"
                  src={item.img}
                  alt="card"
                />
                <div className="card-body">
                  <h5 className="mb-3 text-orange-600 text-center">
                    {item.title}
                  </h5>
                  <p className="text-center">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={loadMoreItems}
            // disabled={isLoading ? true : false}
            className={`${
              isLoading
                ? "custom_disable-button"
                : "custom_dark-button"
            }`}
            // className="custom_dark-button"
          >
            {isLoading ? "Loading ..." : "Read more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
