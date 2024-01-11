import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import DotButton from "../SliderOption/DotButton/DotButton";
import PrevButton from "../SliderOption/PrevButton/PrevButton";
import NextButton from "../SliderOption/NextButton/NextButton";
import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  // tabl img will goes replace with an table id will passed trhough link for call bdd
  const img = [
    {
      id: "slide1",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide2",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide3",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide4",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
    {
      id: "slide5",
      src: "src/assets/CSS1.png",
      alt: "css miniature videos",
    },
  ];
  const OPTIONS = { loop: true };
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    Autoplay(autoplayOptions),
  ]);
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
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
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
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer__embla}>
        <div className={styles.mainContainer__embla__viewport} ref={emblaRef}>
          <div className={styles.mainContainer__embla__viewport__container}>
            {img.map((element, index) => (
              <div
                className={
                  styles.mainContainer__embla__viewport__container__slide
                }
                key={element.id}
              >
                <div
                  className={
                    styles.mainContainer__embla__viewport__container__slide__number
                  }
                >
                  <span>{index + 1}</span>
                </div>
                <Link
                  to={{
                    pathname: "/video",
                    search: element.alt,
                    state: { id: element.id },
                  }}
                >
                  <img
                    className={
                      styles.mainContainer__embla__viewport__container__slide__img
                    }
                    src={element.src}
                    alt="Your alt text"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mainContainer__embla__buttons}>
          <PrevButton
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            // buttonClass will defindedclassName in prev and next composant
            buttonClass="heroSlider"
          />
          <NextButton
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            buttonClass="heroSlider"
          />
        </div>
      </div>

      <div className={styles.mainContainer__dots}>
        {scrollSnaps.map((element, index) => (
          <DotButton
            key={element}
            onClick={() => scrollTo(index)}
            className={`${styles.mainContainer__dots__dot} ${
              index === selectedIndex
                ? styles["mainContainer__dots__dot--selected"]
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
