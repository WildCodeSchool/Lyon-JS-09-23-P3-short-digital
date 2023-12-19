import styles from "./HeroSlider.module.css";

export default function HeroSlider() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.slider1}>
        <div className={styles.slider}>
          <img id="slide1" src="src/assets/CSS1.png" alt="" />
          <img id="slide2" src="src/assets/CSS2.png" alt="" />
          <img id="slide3" src="src/assets/CSS3.png" alt="" />
          <img id="slide4" src="src/assets/CSS4.png" alt="" />
          <img src="src/assets/CSS1.png" alt="" />
        </div>
      </div>
      <div className={styles.sliderNav}>
            <a href="#slide1"></a>
            <a href="#slide2"></a>
            <a href="#slide3"></a>
            <a href="#slide4"></a>
        </div>
    </div>
  );
}
