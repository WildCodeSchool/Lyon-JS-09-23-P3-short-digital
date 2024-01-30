import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import VideoPage from "./pages/VideoPage";
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import Categories from "./pages/categories/Categories";

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
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/video/:id",
    element: <VideoPage />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/categories/:category",
    element: <Categories />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
