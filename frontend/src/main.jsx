import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import VideoPage from "./pages/VideoPage";
import Connexion from "./pages/connexion/Connexion";
import BoutonsLanguages from "./components/boutonsLanguages/BoutonsLanguages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/video",
    element: <VideoPage />,
  },
  {
    path: "/boutons",
    element: <BoutonsLanguages />,
  },
  {
    path: "/video/:id",
    element: <VideoPage />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
