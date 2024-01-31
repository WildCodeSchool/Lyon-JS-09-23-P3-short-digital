import { useState } from "react";
// import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import styles from "./avatar.module.css";
import { useInfosContext } from "../../UserContext";

function Avatar() {
  const { userData } = useInfosContext();
  const [modification, setModification] = useState(false);

  /* useEffect(async () => {
    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        "import.meta.env.VITE_BACKEND_URL/api/users/deleteUser",
        {
          method: "update",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: id,
          }),
        }
      );

      if (response.status === 201) {
        navigate("/connexion");
      } else {
        notifyErreur();
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  }, [avatar]); */

  return (
    <div className={styles.fondAvatar}>
      {modification === false ? (
        <div className={styles.fondAvatar__imageContainer}>
          <img
            className={styles.fondAvatar__image}
            src={`/${userData.avatar}`}
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
            src="/avatarAbstrait.jpg"
            /* onClick={() => {
              setAvatar("avatarAbstrait.jpg");
            }} */
            alt=""
          />
          <input
            type="image"
            src="/avatarOurs.jpg"
            /* onClick={() => setAvatar("avatarOurs.jpg")} */
            alt=""
          />
          <input
            type="image"
            src="/avatarRobot.jpg"
            /* onClick={() => setAvatar("avatarRobot.jpg")} */
            alt=""
          />
          <input
            type="image"
            src="/avatarVoiture.jpg"
            /* onClick={() => setAvatar("avatarVoiture.jpg")} */
            alt=""
          />
        </div>
      )}
    </div>
  );
}

/* Avatar.propTypes = {
  setAvatar: PropTypes.func.isRequired,
}; */

export default Avatar;
