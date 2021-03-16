import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import img1 from "../../images/photo_2019-09-15_15-07-37.jpg";
import img2 from "../../images/photo_2019-09-15_15-07-39.jpg";
import img3 from "../../images/photo_2020-12-01_00-57-29.jpg";
import img4 from "../../images/photo_2020-12-26_21-15-48.jpg";
import img5 from "../../images/photo_2021-02-18_12-01-56.jpg";
import img6 from "../../images/photo_2021-03-16_13-49-37.jpg";
import img7 from "../../images/photo_2021-03-16_13-49-38.jpg";
import img8 from "../../images/photo_2021-03-16_13-49-39.jpg";

const MyCarousel = () => (
  <Carousel className="Carousel">
    <Carousel.Item>
      <img className="d-block w-100" src={img1} alt="First slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img2} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img3} alt="Third slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img4} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img5} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img6} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img7} alt="Second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={img8} alt="Second slide" />
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
