import styles from "./avatar.module.css";
import { useInfosContext } from "../../UserContext";

function Avatar() {
  const { userData } = useInfosContext();

  return (
    <div className={styles.fondAvatar}>
      <img src={`./src/assets/${userData.avatar}`} alt="" />
    </div>
  );
}

export default Avatar;
