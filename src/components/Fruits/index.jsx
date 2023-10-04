import React from "react";
import "./Fruits.scss";

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";
import { Link } from "react-router-dom";
import { FruitsItems } from "../../data/data";

const Fruits = () => {
  const dispatch = useDispatch();

  const addFruitToCart = (fruit) => {
    dispatch(addToCart(fruit));
  };
  return (
    <section className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
      <div className="max-w-[1280px] w-full mx-auto p-4">
        <h2 className="text-center text-4xl font-bold">Fresh Fruits</h2>
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
        {FruitsItems.map((item) => (
          <div className="flex flex-wrap py-8">
            <div className="col-md-8">
              <div className="mb-10">
                <h3 className="text-3xl capitalize">{item.title}</h3>
                <p className="my-5">{item.description}</p>
                <p className="my-5 font-bold">$ {item.price}</p>
                <div>
                  <Link to={"/fruit/" + item.id} className="custom_dark-button mx-1 my-1">
                    Buy Now
                  </Link>

                  <button
                    onClick={() => addFruitToCart(item)}
                    className="custom_dark-button mx-1 my-1"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 flex justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  src={item.img}
                  alt="fruits_card_item1"
                  className="object-cover scale-75"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fruits;
