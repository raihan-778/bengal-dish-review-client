import React, { useState } from "react";

const MyReviewCard = ({ myReview, handleDelete, handleStatusUpdate }) => {
  const { serviceName, text, date, img, _id, author, email } = myReview;
  console.log(myReview);

  // edit review
  // edit review

  return (
    <div>
      <div className="card w-90 h-86 bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img ? img : "not found"} />
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
          <h4 className="card-title">
            <strong>Review Date:</strong> {date ? date : "not found"}
          </h4>
          <p>
            <strong>Review: </strong>
            {text}
          </p>
          <div className="card-actions">
            {/* modal */}
            {/* The button to open modal */}

            {/* <label htmlFor="my-modal-3" className="btn btn-primary">
              Edit Review
            </label> */}

            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <form onSubmit={() => handleStatusUpdate}>
                  <input
                    className="bg-slate-200 text-slate-200"
                    type="text"
                    name="text"
                    defaultValue={text}
                  />
                  <input type="submit" value="Save" />
                </form>
              </div>
            </div> */}
            {/* modal */}

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-warning"
            >
              Delete Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
