// import {Carousel, Carousel } from "bootstrap";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel as Carousel
//  } from "bootstrap";

const Slider = ({ el }) => {
  return (
    <Carousel>
        <Carousel.Item>
        <img
              className="d-block w-100 "
              src="https://i03.appmifile.com/349_operator_in/05/06/2023/9d03696b42d5b5b75d1b773bf3a82c8e.jpg?f=webp"
              alt="pic"
            ></img>
        </Carousel.Item>
        <Carousel.Item>
        <img
              className="d-block w-100"
              src=" https://i03.appmifile.com/713_operator_in/05/06/2023/205f10f57f60dda93b8033fdd9742ed7.jpg?f=webp"

              alt="pic"
            ></img>
        </Carousel.Item>
        <Carousel.Item>
        <img
              className="d-block w-100"
              src="https://i03.appmifile.com/459_operator_in/05/06/2023/42e5d2990e06359bc048f808c8224373.jpg?f=webp"
              alt="pic"
            ></img>
        </Carousel.Item>
        <Carousel.Item>
        <img
              className="d-block w-100"
              src="https://i03.appmifile.com/660_operator_in/05/06/2023/d5f149b14326bb2985366d162ff4f5a7.jpg?f=webp"
              alt="pic"
            ></img>
        </Carousel.Item>
         
    </Carousel>
  );
};

export default Slider;
