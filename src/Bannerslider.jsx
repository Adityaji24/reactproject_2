// BannerSlider.js
import React from "react";
import Carousel from 'react-bootstrap/Carousel'; // Make sure to import Carousel
import musicBanner from "./images/concertm.jpeg";
import artBanner from "./images/art.jpeg";
import foodBanner from "./images/food2.jpeg";

const BannerSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={musicBanner} alt="Music Banner" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>Annual Music Concert</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={artBanner} alt="Art Banner" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>Upcoming Art Exhibition</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foodBanner} alt="Food Banner" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>Exclusive Food Festival</h3>
         </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerSlider;