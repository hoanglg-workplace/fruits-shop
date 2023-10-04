import React from "react";
import Services from "../../components/Services";
import { Helmet } from "react-helmet";

function handleContextMenu(event) {
  event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
}

const ServicePage = () => {
  return (
    <section onContextMenu={handleContextMenu}>
      <Helmet>
        <title>SERVICE - FRUITS SHOP</title>
        <meta name="description" content="SERVICE - FRUITS SHOP" />
        <meta property="og:title" content="SERVICE - FRUITS SHOP" />
        <meta property="og:description" content="SERVICE - FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
        />
      </Helmet>

      <Services />
    </section>
  );
};

export default ServicePage;
