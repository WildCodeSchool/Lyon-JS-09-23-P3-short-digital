import styles from "./NavMobile.module.css";

export default function NavMobile() {
  const icon = [
    {
      src: "src/assets/home.svg",
      alt: "home logo",
      id: 1,
      path: "#path for eslint",
    },
    {
      src: "src/assets/search.svg",
      alt: "search logo",
      id: 2,
      path: "#path for eslint",
    },
    {
      src: "src/assets/circle.svg",
      alt: "add circle logo",
      id: 3,
      path: "#path for eslint",
    },
    {
      src: "src/assets/favorite.svg",
      alt: "favorite logo",
      id: 4,
      path: "#path for eslint",
    },
    {
      src: "src/assets/account.svg",
      alt: "profile logo",
      id: 5,
      path: "#path for eslint",
    },
  ];

  return (
    <nav className={styles.navmobile}>
      {icon.map((element) => (
        <a href={element.path} className={styles.aLink} key={element.id}>
          <img
            src={element.src}
            alt={element.alt}
            className={styles.icon}
            id={element.id}
          />
        </a>
      ))}
    </nav>
  );
}
