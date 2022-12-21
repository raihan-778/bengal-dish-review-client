import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import AddReview from "../Reviews/AddReview";
import Reviews from "../Reviews/Reviews";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

const ServiceDetails = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://b6a11-service-review-server-side-raihan-778.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
        console.log(reviews);
        setLoading(false);
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
  
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
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
        {!user ? (
          <>
            <h2 className="text-center text-4xl font-semibold text-orange-600">
              Please Login First to give your won review
            </h2>
            <button className="btn btn-outline btn-accent mt-5">
              <Link to="/login">Login</Link>
            </button>
          </>
        ) : (
          <>
            {/* <AddReview></AddReview> */}
            <Link to={`/addreview/${_id}`}>
              <button className="btn btn-outline btn-warning">
                Add a Review
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
