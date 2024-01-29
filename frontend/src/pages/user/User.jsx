import { useContext } from "react";
import styles from "./user.module.css";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import Avatar from "./Avatar";
import Informations from "./Informations";
import VideoUser from "./VideoUser";
import { InfosContext } from "../../UserContext";

function User() {
  const contextFetched = useContext(InfosContext);

  const { id } = contextFetched.userData;

  return (
    <div className="userPage">
      <Navbar />
      <div className={styles.userAccount}>
        <Avatar id={id} />
        <Informations id={id} />
      </div>
      <VideoUser id={id} />
      <NavMobile />
    </div>
  );
}

export default User;
