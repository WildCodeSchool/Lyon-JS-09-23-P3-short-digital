import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import styles from "./avatar.module.css";
import { useInfosContext } from "../../UserContext";

function Avatar({ setAvatar }) {
  const { userData } = useInfosContext();
  const [modification, setModification] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.fondAvatar}>
      {modification === false ? (
        <div className={styles.fondAvatar__imageContainer}>
          <img
            className={styles.fondAvatar__image}
            src={`./src/assets/${userData.avatar}`}
            alt=""
          />
          <Button
            variant="contained"
            onClick={() => {
              setModification(true);
            }}
          >
            Modifier
          </Button>
        </div>
      ) : (
        <div className={styles.fondAvatar__imageContainer}>
          <h2>Choisissez votre nouvel avatar</h2>
          <input
            type="image"
            src="./src/assets/avatarAbstrait.jpg"
            onClick={() => {
              setAvatar("avatarAbstrait.jpg");
            }}
            alt=""
          />
          <input
            type="image"
            src="./src/assets/avatarOurs.jpg"
            onClick={() => setAvatar("avatarOurs.jpg")}
            alt=""
          />
          <input
            type="image"
            src="./src/assets/avatarRobot.jpg"
            onClick={() => setAvatar("avatarRobot.jpg")}
            alt=""
          />
          <input
            type="image"
            src="./src/assets/avatarVoiture.jpg"
            onClick={() => setAvatar("avatarVoiture.jpg")}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

Avatar.propTypes = {
  setAvatar: PropTypes.func.isRequired,
};

export default Avatar;
