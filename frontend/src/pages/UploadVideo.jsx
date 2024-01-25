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

function UploadVideo() {
  const [firebaseConfig] = useState({
    apiKey: "AIzaSyAFYtftVDW-hbmQd_278uuY1OTQbUvMdW8",
    authDomain: "short-digital.firebaseapp.com",
    projectId: "short-digital",
    storageBucket: "short-digital.appspot.com",
    messagingSenderId: "384077321635",
    appId: "1:384077321635:web:5e568746c07e6d5f793616",
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
