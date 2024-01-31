import { ToastContainer, toast } from "react-toastify";
import styles from "./user.module.css";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";
import Avatar from "./Avatar";
import Informations from "./Informations";
import VideoUser from "./VideoUser";
import { useInfosContext } from "../../UserContext";

function User() {
  const { userData } = useInfosContext();

  /*   const [avatar, setAvatar] = useState(userData.avatar);
const [firstName, setFirstName] = useState(userData.avatar);
  const [lastName, setLastName] = useState(userData.avatar);
  const [mail, setMail] = useState(userData.avatar);
  const [pseudo, setPseudo] = useState(userData.avatar); */

  const { id } = userData;
  const notifyError = () => toast("Une erreur est survenue");
  const notifySuccessDeleteVideo = () =>
    toast("Votre vidéo a bien été supprimé");

  /* const response = await fetch("http://localhost:3310/api/login", {
      method: "post",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: donnees.email,
        password: donnees.password,
      }),
    }); */

  return (
    <div className="userPage">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.userAccount}>
        <Avatar
          id={id}
          /* setAvatar={() => {
            setAvatar();
          }} */
        />
        <Informations id={id} />
      </div>
      <VideoUser
        id={id}
        notifyError={notifyError}
        notifySuccessDeleteVideo={notifySuccessDeleteVideo}
      />
      <NavMobile />
    </div>
  );
}

export default User;
