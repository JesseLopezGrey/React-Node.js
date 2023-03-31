import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carasol = () => {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bit.ly/3hRMWi0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bit.ly/3TIJfsb"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bit.ly/3hRMWi0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bit.ly/3V9BiNN"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carasol;
