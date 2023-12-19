import styles from "./NavMobile.module.css";

export default function NavMobile() {
  const icon = [
    {
      src: "src/assets/home.svg",
      alt: "home logo",
      id: 1,
    },
    {
      src: "src/assets/search.svg",
      alt: "search logo",
      id: 2,
    },
    {
      src: "src/assets/circle.svg",
      alt: "add circle logo",
      id: 3,
    },
    {
      src: "src/assets/favorite.svg",
      alt: "favorite logo",
      id: 4,
    },
    {
      src: "src/assets/profile.png",
      alt: "profile logo",
      id: 5,
    },
  ];

  return (
    <nav className={styles.navmobile}>
      {icon.map((element) => (
        <img
          src={element.src}
          key={element.id}
          alt={element.alt}
          className={styles.icon}
        />
      ))}
    </nav>
  );
}
