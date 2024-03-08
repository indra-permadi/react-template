import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/tailwind.scss";
// import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Shows from "./Pages/Shows.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "shows",
        element: <Shows />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
