import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import { Pagination, Navigation } from "swiper/modules";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/scss/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/scss/pagination";

import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  const [videosMiniature, setVideosMiniature] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function size() {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
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
      <Swiper
        slidesPerView={screenWidth >= 1100 ? 2.5 : 1}
        spaceBetween={0}
        centeredSlides
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className={styles.mainSwiper__swiper}
      >
        {videosMiniature.map((element) => (
          <SwiperSlide
            className={styles.mainSwiper__swiper__slide}
            key={element.id}
          >
            <Link
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
