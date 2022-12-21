import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, _id, serviceName, image, price, description } = service;

  return (
    <div>
      <div className="card w-82 h-[600px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                src={image}
                alt="food-dish"
                className="rounded-xl w-72 h-[200px]"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            <strong>Dish Name:</strong> {serviceName}
          </h2>
          <h4>
            <strong>Dish info:</strong> {title}
          </h4>
          <p>
            {description.length > 100
              ? description.slice(1, 100) + "..."
              : description}
          </p>
          <span>Price:</span>
          <small className="text-xl font-semibold text-orange-700">
            {price} Tk
          </small>
          <div className="card-actions">
            <Link to={`/servicedetails/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
