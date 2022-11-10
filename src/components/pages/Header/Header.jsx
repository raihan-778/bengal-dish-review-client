import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-3 rounded-xl">
      <div
        className="hero min-h-screen rounded-xl"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=740&t=st=1667903391~exp=1667903991~hmac=9f51caac9095b2c20a2e5fcc3fb27f07fc4f9b80c07971c49680c41a23239aed")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Home made Bengle Foods window.
            </h1>
            <p className="mb-5 text-xl">
              We believe in quality with clients setisfection.Please try us at
              least for the first time.We belive you will not be disappointed.
            </p>
            <Link to="/services">
              <button className="btn btn-primary">Taste Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
