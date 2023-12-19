import { useEffect, useState } from "react";
import Videos from "../components/videos/Videos";

function VideoPage() {
  const [videoInfo, setVideoInfo] = useState("");
  useEffect(() => {
    (async () => {
      const videoCall = await fetch("http://localhost:3310/api/videos/4");
      const videoResult = await videoCall.json();
      setVideoInfo(videoResult);
    })();
  }, []);

  return <Videos src={videoInfo.link} />;
}

export default VideoPage;
