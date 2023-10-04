import React from "react";
import Slider from "../../components/Slider";
import Services from "../../components/Services";
import Fruits from "../../components/Fruits";
import Tasty from "../../components/Tasty";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import Map from "../../components/Map";
import { Helmet } from "react-helmet";

function handleContextMenu(event) {
  event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
}

const HomePage = () => {
  const key = "AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ";

  return (
    <div className="w-full bg-background" onContextMenu={handleContextMenu}>
      <Helmet>
        <title>FRUITS SHOP</title>
        <meta name="description" content="FRUITS SHOP" />
        <meta property="og:title" content="FRUITS SHOP" />
        <meta property="og:description" content="FRUITS SHOP" />
        <meta
          property="og:image"
          content={`https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg`}
        />
      </Helmet>

      <Slider />
      <Services />
      <Fruits />
      <Tasty />
      <Testimonial />
      <Contact />
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
        loadingElement={<div className="h-[50vh]" />}
        containerElement={<div className="h-1/2" />}
        mapElement={<div className="h-[50vh]" />}
      />
    </div>
  );
};

export default HomePage;
