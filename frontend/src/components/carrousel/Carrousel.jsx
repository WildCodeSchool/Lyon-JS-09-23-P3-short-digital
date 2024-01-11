import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carrousel.module.css";
import PrevButton from "../SliderOption/PrevButton/PrevButton";
import NextButton from "../SliderOption/NextButton/NextButton";

export default function Carrousel({ title }) {
  const OPTIONS = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    dragFree: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  // tabl img will goes replace with an table id will passed trhough link for call bdd
  const img = [
    {
      id: "slide111",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide112",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide113",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide114",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide115",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide116",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide117",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide118",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide119",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide120",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide122",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide123",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide124",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide125",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide126",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide127",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide128",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide129",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide130",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide131",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
  ];
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onInit = useCallback((emblaApis) => {
    setScrollSnaps(emblaApis.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApis) => {
    setSelectedIndex(emblaApis.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApis.canScrollPrev());
    setNextBtnDisabled(!emblaApis.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className={styles.carousel__embla}>
      <p className={styles.carousel__embla__title}>{title}</p>
      <div className={styles.carousel__embla__viewport} ref={emblaRef}>
        <div className={styles.carousel__embla__viewport__container}>
          {img.map((element, index) => (
            <div
              className={styles.carousel__embla__viewport__container__slide}
              key={element.id}
            >
              <div
                className={
                  styles.carousel__embla__viewport__container__slide__number
                }
              >
                <span>{index + 1}</span>
              </div>
              <Link
                to={{
                  pathname: "/video",
                  search: element.alt,
                }}
                state={element.id}
              >
                <img
                  className={
                    styles.carousel__embla__viewport__container__slide__img
                  }
                  src={element.src}
                  alt="Your alt text"
                />
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.carousel__embla__viewport__buttons}>
          <PrevButton
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            klass="carousel__embla__button__prev__svg"
            eslint={scrollSnaps}
          />
          <NextButton
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            klass="carousel__embla__button__next__svg"
            eslint={selectedIndex}
          />
        </div>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
};
