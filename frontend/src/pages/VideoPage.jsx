import Videos from "../components/videos/Videos";
import ScrollingMiniatures from "../components/scrollingMiniature/ScrollingMiniatures";
import Navbar from "../layout/navbar/Navbar";
import NavMobile from "../layout/NavMobile/NavMobile";
import styles from "./videopage.module.css";

function VideoPage() {
  return (
    <div id={styles.videopage}>
      <Navbar />
      <Videos />
      <ScrollingMiniatures />
      <NavMobile />
    </div>
  );
}

export default VideoPage;
