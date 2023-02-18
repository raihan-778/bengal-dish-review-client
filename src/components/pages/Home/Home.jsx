import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import FeaturesCard from "../../FeaturesCard/FeaturesCard";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import Header from "../Header/Header";
import HomeServices from "./HomeServices";
// import AnimationNav from "../../shared/Navbar/AnimationNav/AnimationNav";
import Testimonial from "../../Testimonial/Testimonial";

const Home = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://b6a11-service-review-server-side-raihan-778.vercel.app/homeDishes`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHomeServices(data);
        console.log(homeServices);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      {/* <AnimationNav></AnimationNav> */}
      <Header></Header>
      <FeaturesCard></FeaturesCard>
      <div className="bg-green-700">
        {" "}
        <Testimonial
          testimonial={{ text: "This product is amazing!" }}
        ></Testimonial>
      </div>

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
