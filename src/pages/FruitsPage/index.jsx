import React from "react";
import Fruits from "../../components/Fruits";
import { Helmet } from "react-helmet";

function handleContextMenu(event) {
  event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
}

const FruitsPage = () => {
  return (
    <section onContextMenu={handleContextMenu}>
      <Helmet>
        <title>FRUITS - FRUITS SHOP</title>
        <meta name="description" content="FRUITS - FRUITS SHOP" />
        <meta property="og:title" content="FRUITS - FRUITS SHOP" />
        <meta property="og:description" content="FRUITS - FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
        />
      </Helmet>

      <Fruits />
    </section>
  );
};

export default FruitsPage;
