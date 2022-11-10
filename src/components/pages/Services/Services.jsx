import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  let [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-raihan-778.vercel.app/dishes"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="grid p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
