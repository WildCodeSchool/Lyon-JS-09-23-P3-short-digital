import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carrousel.module.css";

export default function Carrousel({ title }) {
  const OPTIONS = {
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    startIndex: 0,
  };
  const [emblaRef] = useEmblaCarousel(OPTIONS);
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

  return (
    <div className={styles.embla}>
      <p>{title}</p>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__viewport__container}>
          {img.map((element, index) => (
            <div
              className={styles.embla__viewport__container__slide}
              key={element.id}
            >
              <div className={styles.embla__viewport__container__slide__number}>
                <span>{index + 1}</span>
              </div>
              <img
                className={styles.embla__viewport__container__slide__img}
                src={element.src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  title: PropTypes.string.isRequired,
};
