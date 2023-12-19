import Videos from "../components/videos/Videos";
import ScrollingMiniatures from "../components/scrollingMiniature/ScrollingMiniatures";
import Navbar from "../layout/navbar/Navbar";
import styles from "./videopage.module.css";

function VideoPage() {
  return (
    <div id={styles.videopage}>
      <Navbar />
      <Videos src="https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/Johnny%20Crying%20-%20Super%20Quenouille.mp4?alt=media&token=9ee54e1b-993f-47ec-836e-e0d4e2394c2f" />
      <ScrollingMiniatures />
    </div>
  );
}

export default VideoPage;
