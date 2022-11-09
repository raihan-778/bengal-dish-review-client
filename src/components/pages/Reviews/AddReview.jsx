import React from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const AddReview = () => {
  const { _id, serviceName } = useLoaderData();
  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = `${form.firstName.value} ${form.lastName.value}`;

    // const email = user?.email || "unregistered"
    const email = form.email.value;
    const imgUrl = form.imgURL.value;
    const message = form.message.value;
    const rating = form.rating.value;
    console.log(name, imgUrl, email, message);
    const review = {
      seviceId: _id,
      serviceName,
      author: name,
      img: imgUrl,
      rating: rating,
      email,
      text: message,
    };
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Service added successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleAddReview}>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3 px-5">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="url"
            name="imgURL"
            placeholder="Enter imgURL"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="rating"
            placeholder="Enter rating"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered h-24 w-3/4 p-5 m-5"
            placeholder="Please write your value comments"
            name="message"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit Now"
          className="btn btn-primary mx-5"
        ></input>
      </form>
    </div>
  );
};

export default AddReview;
