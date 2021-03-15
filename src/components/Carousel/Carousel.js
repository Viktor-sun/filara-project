import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const MyCarousel = () => (
  <Carousel className="Carousel">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pixabay.com/get/g4914646fc5897f3d7343d787a6061837e4bfad9fb93ab7ff7306296db5d279a517995a3e68e9e98d32d7a012b73580be_640.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pixabay.com/get/gbda85da1d1b31caf627ba63d85d5599bd10875e3676db4af0a25637d0c620bf358710a9c8cec61c544ee38de03aae91e721123f0014e2551e9945725a63bc743_640.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://pixabay.com/get/ga8fe356046d14d12407a19209055851c9678db3532f850f0bda4cc668cb1fc523248337048ec1196a9f3aa3d3ba40ce2b99532357661c058f4075de07e51a96c_640.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default MyCarousel;
