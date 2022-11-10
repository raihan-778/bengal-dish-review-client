import React from "react";

const MyReviewCard = ({ myReview }) => {
  const { serviceName, text, img, author, email } = myReview;
  return (
    <div>
      <div className="card w-90 h-86 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2>
            <strong>Service Name: </strong> {serviceName}
          </h2>
          <h4 className="card-title">
            <strong>Author:</strong> {author}
          </h4>
          <h4 className="card-title">
            <strong>Email:</strong> {email}
          </h4>
          <p>
            <strong>Review: </strong>
            {text}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Edit Review</button>
            <button className="btn btn-warning">Delete Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
