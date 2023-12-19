import styles from "./NavMobile.module.css";

export default function NavMobile() {
  return (
    <nav className={styles.navmobile}>
      <img className={styles.icon} src="src/assets/home.png" alt="" />
      <img className={styles.icon} src="src/assets/search.png" alt="" />
      <img className={styles.icon} src="src/assets/add.png" alt="" />
      <img className={styles.icon} src="src/assets/favoris.png" alt="" />
      <img className={styles.icon} src="src/assets/profile.png" alt="" />
    </nav>
  );
}
