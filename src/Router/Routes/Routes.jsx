import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/pages/Blog/Blog";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/Login/Login";
import Register from "../../components/pages/Register/Register";
import Root from "../../Layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
