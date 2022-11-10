import React from "react";
import { toast } from "react-toastify";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const variation = form.variation.value;
    const foodType = form.foodType.value;
    const price = form.price.value;
    const description = form.message.value;
    const title = form.title.value;
    const imgUrl = form.imgURL.value;
    console.log(
      serviceName,
      variation,
      foodType,
      imgUrl,
      price,
      description,
      title
    );
    const service = {
      serviceName,
      description,
      price,
      foodType,
      variation,
      image: imgUrl,
      title,
    };
    fetch(
      `https://b6a11-service-review-server-side-raihan-778.vercel.app/dishes`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("review submitted successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleAddService}>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3 px-5">
          <input
            type="text"
            placeholder="Enter Service Name"
            name="serviceName"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="variation"
            placeholder="enter variation"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="price"
            placeholder="enter price"
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            name="foodType"
            placeholder="Enter type of food"
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
            name="title"
            placeholder="Enter title"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-bordered h-24 w-3/4 p-5 m-5"
            placeholder="Enter Service Description"
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

export default AddService;
