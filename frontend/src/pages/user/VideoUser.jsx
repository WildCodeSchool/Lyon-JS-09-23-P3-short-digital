import styles from "./videoUser.module.css";
import deleteIcon from "../../assets/deleteIcon.svg";
import editIcon from "../../assets/editIcon.svg";
import CSS1 from "../../assets/CSS1.png";

function VideoUser() {
  const fakeDonneesVideo = [
    {
      img: CSS1,
      title: "titre video",
      description: "description video",
    },
  ];

  return (
    <div className={styles.videoUserComponent}>
      <h2 id={styles.componentTitle}>Mes Videos</h2>
      {fakeDonneesVideo.map((e) => (
        <div key={e.id} className={styles.videoUserComponent__oneVideo}>
          <img src={e.image} alt="" id={styles.miniature} />
          <div className={styles.videoUserComponent__oneVideo__videoInfo}>
            <div
              className={
                styles.videoUserComponent__oneVideo__videoInfo__titleAndButton
              }
            >
              <h3 id="videoTitle">{e.title}</h3>
              <div
                className={
                  styles.videoUserComponent__oneVideo__videoInfo__titleAndButton__buttons
                }
              >
                <input
                  className={
                    styles.videoUserComponent__oneVideo__videoInfo__titleAndButton__buttons__singleButton
                  }
                  type="image"
                  src={editIcon}
                  alt="modifier la video"
                />
                <input
                  className={
                    styles.videoUserComponent__oneVideo__videoInfo__titleAndButton__buttons__singleButton
                  }
                  type="image"
                  src={deleteIcon}
                  alt="supprimer la video"
                />
              </div>
            </div>
            <p>{e.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoUser;
