import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";
import Skeleton from "react-loading-skeleton";
import { FruitsItems } from "../../data/data";

const Fruit = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState([]);
  //   const [similarfruits, setSimilarFruits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();
  const addFruitToCart = (fruit) => {
    dispatch(addToCart(fruit));
  };

  useEffect(() => {
    const getFruit = async () => {
      setLoading(true);
      setLoading2(true);
      //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      //   const data = await response.json();
      // eslint-disable-next-line
      const data = await FruitsItems.find((item) => id == item.id);

      setFruit(data);
      setLoading(false);

      //   const response2 = await fetch(
      //     `https://fakestoreapi.com/products/category/${data.category}`
      //   );
      //   const data2 = await response2.json();
      //   setSimilarFruits(data2)
      setLoading2(false);
    };
    getFruit();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="max-w-[1280px] max-md:max-w-[600px] w-full mx-auto p-4">
          <div className="md:flex">
            <div className="w-full max-md:flex justify-center items-center">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowFruit = () => {
    return (
      <>
        <div className="max-w-[1280px] max-md:max-w-[600px] w-full mx-auto p-4">
          <div className="md:flex">
            <div className="w-full flex justify-center items-center">
              <img
                className="max-w-full h-auto"
                src={fruit.img}
                alt={fruit.title}
                // width="400px"
                // height="400px"
              />
            </div>
            <div className="w-full py-5">
              <h4 className="uppercase text-gray-500 text-3xl">
                {fruit.category}
              </h4>
              <h1 className="text-4xl my-4">{fruit.title}</h1>
              <p className="lead">
                {fruit.rating} ★<i className="fa fa-star"></i>
              </p>
              <h3 className="text-3xl my-4">${fruit.price}</h3>
              <p className="text-lg text-gray-500">{fruit.description}</p>
              <div className="my-4">
                <button
                  className="custom_black_outline-button mx-1 my-1"
                  onClick={() => addFruitToCart(fruit)}
                >
                  Add to Cart
                </button>
                <Link to="/cart" className="custom_dark-button mx-1 my-1">
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarFruit = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="flex">
            {FruitsItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mx-4 text-center relative flex flex-col justify-center items-center min-w-0 break-words bg-clip-border border rounded-lg p-4"
                >
                  <img
                    className="max-h-[250px] max-w-[200px] object-cover"
                    src={item.img}
                    alt="Card"
                    // height={250}
                    // width={200}
                  />
                  <div className="p-2 flex-auto">
                    <h5 className="text-xl">
                      {item.title.substring(0, 25)}...
                    </h5>
                  </div>
                  <ul className="my-2">
                    <li>${fruit.price}</li>
                  </ul>
                  <div>
                    <Link
                      to={"/fruit/" + item.id}
                      className="custom_dark-button m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="custom_dark-button m-1"
                      onClick={() => addFruitToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full h-auto py-[2%]">
        <div className="">{loading ? <Loading /> : <ShowFruit />}</div>
        <div className="my-5 py-5">
          <div className="hidden md:block">
            <h2 className="text-3xl max-w-[1280px] max-md:max-w-[600px] w-full mx-auto p-4">
              You may also Like
            </h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarFruit />}
            </Marquee>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Fruit;
