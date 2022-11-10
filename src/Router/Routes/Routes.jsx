import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/pages/Blog/Blog";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/Login/Login";
import Register from "../../components/pages/Register/Register";
import AddReview from "../../components/pages/Reviews/AddReview";
import MyReviews from "../../components/pages/Reviews/MyReviews";
import Reviews from "../../components/pages/Reviews/Reviews";
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
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-raihan-778.vercel.app/reviews"
          ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addreview/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-raihan-778.vercel.app/dishes/${params.id}`
          ),
      },
      {
        path: `/servicedetails/:id`,
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-raihan-778.vercel.app/dishes/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
