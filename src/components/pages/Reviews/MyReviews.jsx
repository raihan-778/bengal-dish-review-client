import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyReviews(data);
        console.log(myReviews);
      });
  }, [user?.email]);
  return (
    <div>
      <h2 className="tex-3xl font-semibold mb-3">
        {" "}
        Your have Total{" "}
        <span className="text-cyan-500">{myReviews.length}</span> reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-3 lg:grid-cols-2 gap-3">
        {myReviews.map((myReview) => (
          <MyReviewCard key={myReview._id} myReview={myReview}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
