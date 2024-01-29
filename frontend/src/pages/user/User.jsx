import styles from "./user.module.css";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import Avatar from "./Avatar";
import Informations from "./Informations";
import VideoUser from "./VideoUser";

function User() {
  return (
    <div className="userPage">
      <Navbar />
      <div className={styles.userAccount}>
        <Avatar />
        <Informations />
      </div>
      <VideoUser />
      <NavMobile />
    </div>
  );
}

export default User;
