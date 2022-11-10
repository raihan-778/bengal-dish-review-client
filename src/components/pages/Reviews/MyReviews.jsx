import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user, loading, setLoading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    );
  }

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
        console.log(myReviews);
        setLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to candel this order?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = myReviews.filter((revw) => revw._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="tex-3xl font-semibold mb-3">
        {" "}
        Your have Total{" "}
        <span className="text-cyan-500">{myReviews.length}</span> reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-3 lg:grid-cols-2 gap-3">
        {myReviews.map((myReview) => (
          <MyReviewCard
            key={myReview._id}
            handleDelete={handleDelete}
            myReview={myReview}
          ></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
