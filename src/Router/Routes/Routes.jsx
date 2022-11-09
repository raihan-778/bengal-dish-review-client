import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/pages/Blog/Blog";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/Login/Login";
import Register from "../../components/pages/Register/Register";
import AddService from "../../components/pages/Services/addService";
import ServiceDetails from "../../components/pages/Services/ServiceDetails";
import Services from "../../components/pages/Services/Services";
import Root from "../../Layouts/Root";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: `/servicedetails/:id`,
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dishes/${params.id}`),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
