import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        console.log(reviews);
      });
  }, []);

  const singleDish = useLoaderData();
  console.log(singleDish);
  const {
    title,
    _id,
    foodType,
    variation,
    serviceName,
    image,
    price,
    description,
  } = singleDish;

  return (
    <div>
      {/* service details */}
      <div className="card my-3 lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body w-1/2 text-left">
          <h2 className="card-title">Dish Name: {serviceName}</h2>
          <h4>
            <strong>Dish info:</strong> {title}
          </h4>
          <h6>
            <strong>FoodType:</strong> {foodType}
          </h6>
          <h6>
            <strong>Variation:</strong> {variation}
          </h6>
          <p>
            <strong>Price:</strong>
            <small className="text-orange-600 text-2xl font-semi">
              {" "}
              {price}
            </small>
          </p>
          <p>
            <strong>About:</strong> {description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

      {/* review section*/}
      <h2 className="text-3xl font-bold text-conter">Customer reviews</h2>
      <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {reviews.map((review) => (
          <Reviews key={_id} review={review}></Reviews>
        ))}
      </div>
      <div className="mb-3">
        <Link to={`/addreview/${_id}`}>
          <button className="btn btn-outline btn-warning">Add a Review</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
