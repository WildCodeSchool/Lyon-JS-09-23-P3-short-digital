import { useState } from "react";
import styles from "./avatar.module.css";
import avatarAbstrait from "../../assets/avatarAbstrait.jpg";
import avatarOurs from "../../assets/avatarOurs.jpg";
import avatarRobot from "../../assets/avatarRobot.jpg";
import avatarVoiture from "../../assets/avatarVoiture.jpg";

function Avatar() {
  const [selectedAvatar, setSelectedAvatar] = useState(
    "/src/assets/avatarAbstrait.jpg"
  );

  const avatarSet = [
    {
      img: avatarAbstrait,
      alt: "forme abstraite",
      id: 0,
    },
    {
      img: avatarOurs,
      alt: "ours",
      id: 1,
    },
    {
      img: avatarRobot,
      alt: "robot",
      id: 2,
    },
    {
      img: avatarVoiture,
      alt: "voiture orange",
      id: 3,
    },
  ];

  const handleClick = (i) => {
    setSelectedAvatar(i);
  };

  return (
    <div className={styles.fondAvatar}>
      {avatarSet.map((e) => (
        <input
          type="image"
          key={e.id}
          className={styles.fondAvatar__avatar}
          id={
            selectedAvatar === e.img
              ? styles.fondAvatar__actualAvatar
              : undefined
          }
          onClick={() => handleClick(e.img)}
          src={e.img}
          alt={e.alt}
        />
      ))}
    </div>
  );
}

export default Avatar;
