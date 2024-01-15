import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import VideoPage from "./pages/VideoPage";
import Inscription from "./pages/inscription/Inscription";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
