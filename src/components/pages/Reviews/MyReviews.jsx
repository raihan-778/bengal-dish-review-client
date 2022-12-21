import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-raihan-778.vercel.app/myreviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
      });
  }, [user?.email]);
  //Delete Review
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this review?"
    );
    if (proceed) {
      fetch(
        `https://b6a11-service-review-server-side-raihan-778.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.warning("Deleted Successfully");
            const remaining = myReviews.filter((revw) => revw._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  // edit review
  const handleStatusUpdate = (id, text) => {
    fetch(
      `https://b6a11-service-review-server-side-raihan-778.vercel.app/reviews/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = myReviews.filter((odr) => odr._id !== id);
          const approving = myReviews.find((odr) => odr._id === id);
          approving.text = "Approved";
          const newReviews = [...remaining, approving];
          console.log(approving);
          setMyReviews(newReviews);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <h2 className="tex-3xl font-semibold mb-3">
        {" "}
        Your have Total{" "}
        <span className="text-cyan-500">{myReviews.length}</span> reviews
      </h2>
      {myReviews.length <= 0 && (
        <h2 className="text-3xl text-center font-semibold text-orange-700">
          You have No review to displsy
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 p-3 lg:grid-cols-2 gap-3">
        {myReviews.map((myReview) => (
          <MyReviewCard
            key={myReview._id}
            handleStatusUpdate={handleStatusUpdate}
            handleDelete={handleDelete}
            myReview={myReview}
          ></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
