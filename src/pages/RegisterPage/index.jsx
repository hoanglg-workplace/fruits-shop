import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>REGISTER - FRUITS SHOP</title>
        <meta name="description" content="REGISTER - FRUITS SHOP" />
        <meta property="og:title" content="REGISTER - FRUITS SHOP" />
        <meta property="og:description" content="REGISTER - FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
        />
      </Helmet>

      <section className="w-full h-auto py-[2%] max-md:max-w-[600px] mx-auto">
        <h1 className="text-center text-4xl">Register</h1>
        <div className="flex flex-row my-4 h-100">
          <div className="col-md-4 mx-auto">
            <form>
              <div className="my-3 flex flex-col">
                <label for="display-4">Full Name</label>
                <input
                  type="email"
                  className="border-gray-300 border px-3 py-1"
                  id="floatingInput"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="my-3 flex flex-col">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  className="border-gray-300 border px-3 py-1"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3 flex flex-col">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  className="border-gray-300 border px-3 py-1"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link to="/login" className="underline text-cyan-400">
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center mb-10">
                <button
                  className="my-2 mx-auto custom_dark-button"
                  type="submit"
                  disabled
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
};

export default RegisterPage;
