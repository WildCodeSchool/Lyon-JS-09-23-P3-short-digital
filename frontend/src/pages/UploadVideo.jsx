import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import Navbar from "../layout/navbar/Navbar";
import NavMobile from "../layout/NavMobile/NavMobile";
import styles from "./uploadVideo.module.css";
import "dotenv/config";

function UploadVideo() {
  const [firebaseConfig] = useState({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  });

  const [video, setVideo] = useState({
    name: "",
    description: "",
    videoUrl: "",
    miniatureUrl: "",
    weight: 0,
    userId: 1,
  });
  const [name, setName] = useState("name");
  const [description, setDescription] = useState("description");
  const [videoFile, setVideoFile] = useState();
  const [miniatureFile, setMiniatureFile] = useState();

  const postDataVideo = async () => {
    const res = await fetch("http://localhost:3330/api/videos/upload", {
      method: "POST",
      body: JSON.stringify({ video }),
      headers: { "Content-Type": "application/json" },
    });
    await res.json();
  };

  useEffect(() => {
    if (video.videoUrl !== "" && video.videoUrl !== "") {
      postDataVideo();
    }
  }, [video.miniatureUrl]);

  // Initialise Firebase
  const app = initializeApp(firebaseConfig);

  // Initialise le stockage dans le cloud et obtient la référence du service
  const storage = getStorage(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const typeVideo = videoFile.type.split("/");
    const newVideoRef = ref(storage, `/videos/${video.name}.${typeVideo[1]}`);
    const typeMiniature = videoFile.type.split("/");
    const newMiniatureRef = ref(
      storage,
      `/miniatures/${video.name}.${typeMiniature[1]}`
    );

    try {
      await uploadBytes(newVideoRef, videoFile);
      await uploadBytes(newMiniatureRef, miniatureFile);
    } catch (error) {
      console.error(error);
    }
    const urlvideo = await getDownloadURL(newVideoRef);
    const urlminiature = await getDownloadURL(newMiniatureRef);
    const metadataVideo = await getMetadata(newVideoRef);
    setVideo({
      ...video,
      videoUrl: urlvideo,
      miniatureUrl: urlminiature,
      weight: metadataVideo.size,
    });
  };

  const handleChangeVideo = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleChangeMiniature = (event) => {
    const file = event.target.files[0];
    setMiniatureFile(file);
  };

  return (
    <div id={styles.uploadVideoContainer}>
      <Navbar />
      <form id={styles.uploadVideoContainer__form}>
        <label htmlFor="uploadFile">Choisissez un fichier</label>
        <input type="file" name="video[file]" onChange={handleChangeVideo} />
        <label htmlFor="miniature">Veuillez choisir une miniature</label>
        <input
          type="file"
          name="video[miniature]"
          onChange={handleChangeMiniature}
        />
        <label htmlFor="name">Quel est le nom de votre vidéo ?</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setVideo({ ...video, name: e.target.value });
            setName(e.target.value);
          }}
        />
        <label htmlFor="name">Description</label>
        <input
          type="text"
          name="video[description]"
          value={description}
          onChange={(e) => {
            setVideo({ ...video, description: e.target.value });
            setDescription(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Valider{" "}
        </button>
      </form>
      <NavMobile />
    </div>
  );
}

export default UploadVideo;
