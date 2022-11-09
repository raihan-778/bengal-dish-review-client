import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomeServices = ({ homeService }) => {
  const { title, price, image, serviceName, description } = homeService;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Dish Name: {serviceName}</h2>

        <p>Dish info: {title}</p>
        <p>
          About:{" "}
          {description.length > 100 ? description.slice(1, 100) : description}
        </p>
        <span>Price:</span>

        <small className="text-xl font-semibold text-orange-700">
          {price} Tk
        </small>
      </div>
    </div>
  );
};

export default HomeServices;
