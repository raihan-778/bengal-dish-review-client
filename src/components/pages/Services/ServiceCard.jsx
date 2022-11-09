import React from "react";

const ServiceCard = ({ service }) => {
  const { title, serviceName, image, price, description } = service;

  return (
    <div>
      <div className="card w-82 h-90 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="food-dish" className="rounded-xl w-72 h-64" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{serviceName}</h2>
          <h4>{title}</h4>
          <p>
            {description.length > 100
              ? description.slice(1, 100) + "..."
              : description}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
