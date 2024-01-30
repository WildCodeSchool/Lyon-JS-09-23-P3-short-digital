import "./Categories.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Navbar from "../../layout/navbar/Navbar";
// import NavMobile from "../../layout/NavMobile/NavMobile";
import Carrousel from "../../components/carrousel/Carrousel";

export default function Categories() {
  const params = useParams();
  const [idVideo, setIdVideos] = useState([]);
  const tableId = ["tableaux", "fonction", "variables"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        tableId.map(async (element, index) => {
          const response = await fetch(
            `http://localhost:3310/api/special/${params.category}?name=${element}`,
            {
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
          }
          const data = await response.json();
          setIdVideos((prevIdVideos) => {
            const newIdVideos = [...prevIdVideos];
            newIdVideos[index] = data.map((elementId) => elementId.id);
            return newIdVideos;
          });
        });
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {idVideo.length > 0 ? (
        <Carrousel title="Tableaux" tableId={idVideo[0]} />
      ) : null}
      {idVideo.length > 0 ? (
        <Carrousel title="Fonction" tableId={idVideo[1]} />
      ) : null}
    </>
  );
}
