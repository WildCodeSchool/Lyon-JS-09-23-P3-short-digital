import "./Categories.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../layout/navbar/Navbar";
import NavMobile from "../../layout/NavMobile/NavMobile";

export default function Categories() {
  const params = useParams();
  // const [idVideo, setIdVideos] = useState([]);
  // const [videoCategories, setVideoCategories] = useState();
  const [newId, setNewId] = useState([]);
  // const [test, setTest] = useState();
  const tableId = ["tableaux", "fonction", "variables"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = tableId.map(async (element) => {
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
        });
        const newData = await Promise.all(promises);
        const flattenedData = newData;
        const newIds = flattenedData.map((element) => element.id);
        // newId.includes(newIds) ? newId.push(newIds) : setNewId("coucou");
        setNewId(newId, newIds);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <NavMobile />
    </>
  );
}
