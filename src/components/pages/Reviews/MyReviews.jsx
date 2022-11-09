import React, { useEffect, useState } from "react";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);

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
      <h2>{myReviews.length}</h2>
      {}
    </div>
  );
};

export default MyReviews;
