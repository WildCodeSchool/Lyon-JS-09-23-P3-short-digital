import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
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
  return (
    <div className={styles.mainContainer}>
      <div className={styles.slider1}>
        <div className={styles.slider}>
          {img.map((element) => (
            <img id={element.id} src={element.src} alt={element.alt} />
          ))}
        </div>
      </div>
      <div className={styles.sliderNav}>
        <a href="#slide1">e</a>
        {/* "e" are just here for eslint because if <a> are empty eslint saw an aerror */}
        <a href="#slide2">e</a>
        <a href="#slide3">e</a>
        <a href="#slide4">e</a>
      </div>
    </div>
  );
}
