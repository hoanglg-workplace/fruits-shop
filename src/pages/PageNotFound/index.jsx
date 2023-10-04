import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
// import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";

function handleContextMenu(event) {
  event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
}

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>ERROR PAGE - FRUITS SHOP</title>
        <meta name="description" content="ERROR PAGE - FRUITS SHOP" />
        <meta property="og:title" content="ERROR PAGE - FRUITS SHOP" />
        <meta property="og:description" content="ERROR PAGE - FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1`}
        />
      </Helmet>

      <div
        className="w-[100vw] h-[100vh] relative text-white bg-black overflow-hidden"
        onContextMenu={handleContextMenu}
      >
        <div className="text-center block relative w-[80%] my-[200px] mx-auto justify-center items-center">
          <div className="text-[220px] relative inline-block z-[2] h-[250px] tracking-widest">
            404
          </div>
          <hr />
          <br />
          <br />
          <div className="text-center block relative tracking-widest text-6xl line leading-[80%]">
            TRANG
          </div>
          <br />
          <div className="text-center block relative text-xl">
            KHÔNG TÌM THẤY
          </div>
          <br />
          <a
            className="relative inline-block bg-white w-[50%] p-1 z-[5] mx-auto text-green-500 text 	no-underline mr-2"
            href="/"
            target=""
          >
            TRỞ VỀ TRANG CHỦ
          </a>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
