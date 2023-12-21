import { useEffect, useState } from "react";
import Videos from "../components/videos/Videos";
import ScrollingMiniatures from "../components/scrollingMiniature/ScrollingMiniatures";
import Navbar from "../layout/navbar/Navbar";
import styles from "./videopage.module.css";

function VideoPage() {
  const [videoInfo, setVideoInfo] = useState("");
  useEffect(() => {
    (async () => {
      const videoCall = await fetch("http://localhost:3310/api/videos/4");
      const videoResult = await videoCall.json();
      setVideoInfo(videoResult);
    })();
  }, []);

  return (
    <div id={styles.videopage}>
      <Navbar />
      <Videos src={videoInfo.link} />
      <ScrollingMiniatures />
    </div>
  );
}

export default VideoPage;
