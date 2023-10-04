import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/features/CartSlice";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <section className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto bg-background mt-5">
        <div className="py-[2%] mx-auto text-center">
          <h4 className="text-center text-5xl py-5">Your Cart is Empty</h4>
          <Link to="/fruits" className="custom_black_outline-button mx-4 w-40">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </section>
    );
  };

  const addItem = (fruit) => {
    dispatch(addToCart(fruit));
  };
  const removeItem = (fruit) => {
    dispatch(removeFromCart(fruit));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    cartState.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    cartState.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-full">
          <div className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
            <div className="flex-wrap flex flex-col md:flex-row justify-center my-4">
              <div className="flex-0-auto md:w-1/2 mx-2 my-2 md:my-0">
                <div className="flex flex-col relative border rounded-lg">
                  <div className="flex flex-col relative border rounded-tl-lg rounded-tr-lg p-5 bg-background">
                    <h5 className="text-xl">Item List</h5>
                  </div>
                  <div className="flex-auto p-5">
                    {cartState.map((item, index) => {
                      return (
                        <div key={item.id}>
                          <div className="flex flex-col md:flex-row items-center justify-between py-5">
                            <div>
                              <div
                              // className="bg-image rounded"
                              // data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.img}
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="py-5">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                            </div>

                            <div>
                              <div className="flex mb-4 max-w-[300px]">
                                <button
                                  className="border px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  -
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  className="border px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  +
                                </button>
                              </div>

                              <p className="text-center">
                                <strong>
                                  <span>{item.qty}</span> x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>
                          {index !== cartState.length - 1 && <hr />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex-0-auto md:w-1/3 mx-2 my-2 md:my-0">
                <div className="flex flex-col relative border rounded-lg mb-4">
                  <div className="flex flex-col relative border rounded-tl-lg rounded-tr-lg p-5 bg-background">
                    <h5 className="text-xl">Order Summary</h5>
                  </div>
                  <div className="flex-auto p-5">
                    <ul>
                      <li className="flex flex-row items-center justify-between py-5">
                        Products ({totalItems})
                        <span>${Math.round(subtotal)}</span>
                      </li>
                      <li className="flex flex-row items-center justify-between py-5">
                        Shipping
                        <span>${shipping}</span>
                      </li>
                      <li className="flex flex-row items-center justify-between py-5">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>${Math.round(subtotal + shipping)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link to="/checkout" className="custom_dark-button">
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Helmet>
        <title>CART - FRUITS SHOP</title>
        <meta name="description" content="CART - FRUITS SHOP" />
        <meta property="og:title" content="CART - FRUITS SHOP" />
        <meta property="og:description" content="CART - FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
        />
      </Helmet>

      <div className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
        <h1 className="text-center text-4xl">Cart</h1>
        {/* <hr /> */}
        {cartState.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  );
};

export default CartPage;
