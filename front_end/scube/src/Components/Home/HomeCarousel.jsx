import { Carousel } from "antd";
import React from "react";
import styles from "./Home.module.css";

function HomeCarousel() {
  return (
    <Carousel autoplay>
      <div className={styles.Carousel__solo}>
        <img
          alt="sliderOne"
          src=""
        ></img>
      </div>
      <div className={styles.Carousel__solo}>
        <img
          alt="sliderTwo"
          src=""
        ></img>
      </div>
      <div className={styles.Carousel__solo}>
        <img
          alt="sliderThree"
          src=""
        ></img>
      </div>
    </Carousel>
  );
}

export default HomeCarousel;