import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturesCard from "../../FeaturesCard/FeaturesCard";

import Header from "../Header/Header";
import HomeServices from "./HomeServices";

const Home = () => {
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/homeDishes`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHomeServices(data);
        console.log(homeServices);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <FeaturesCard></FeaturesCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {homeServices.map((homeService) => (
          <HomeServices
            key={homeService._id}
            homeService={homeService}
          ></HomeServices>
        ))}
      </div>
      <div className="my-3">
        <Link to="/services">
          <button className="btn btn-primary">View All</button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Home;
