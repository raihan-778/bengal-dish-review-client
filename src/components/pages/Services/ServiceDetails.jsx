import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);

  const singleDish = useLoaderData();
  console.log(singleDish);
  const {
    title,
    _id,
    reviews,
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
        {reviews.map((singleReview) => (
          <Reviews key={_id} singleReview={singleReview}></Reviews>
        ))}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline btn-warning">Add a Review</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
