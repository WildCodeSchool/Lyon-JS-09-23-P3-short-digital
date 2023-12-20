import { useEffect } from "react";

export default function Carrouel() {
  const [videosMiniature, setVideosMiniature] = useState("");
  useEffect(() => {
    (async () => {
      const videoCall = await fetch("http://localhost:3310/api/videos/4");
      const videoResult = await videoCall.json();
            setVideosMiniature(videoResult);
    })();
    },[]);
    return
}