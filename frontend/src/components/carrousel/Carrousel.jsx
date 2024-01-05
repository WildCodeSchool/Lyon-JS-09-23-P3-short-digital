import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carrousel.module.css";
import "swiper/css";

export default function Carrousel({ title }) {
  const [videosMiniature, setVideosMiniature] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  function size() {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
  size();
  useEffect(() => {
    (async () => {
      const videoCall = await fetch("http://localhost:3310/api/videos");
      const videoResult = await videoCall.json();
      setVideosMiniature(videoResult);
    })();
  }, []);
  return (
    <div className={styles.mainSwiper}>
      <p>{title}</p>
      <Swiper
        slidesPerView={screenWidth >= 1100 ? 5 : 3}
        spaceBetween={0}
        className={styles.mainSwiper__swiper}
      >
        {videosMiniature.map((element) => (
          <SwiperSlide
            className={styles.mainSwiper__swiper__slide}
            key={element.id}
          >
            <Link
              id={element.id}
              className={styles.mainSwiper__swiper__slide__link}
              to={{
                pathname: `/video/${element.id}`,
                search: element.title,
              }}
            >
              <img
                src={element.image}
                alt=""
                key={element.id}
                id={element.id}
                className={styles.mainSwiper__swiper__slide__link__imgs}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
};
