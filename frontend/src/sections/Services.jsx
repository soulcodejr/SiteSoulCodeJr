import React from "react";
import CardServices from "../components/CardServices";
import data from "../data/ServicesData.json";

import "./Services.css";

const Services = () => {
  return (
    <div className="outer-container-services">
      <button className="section-button">Serviços</button>
      <h1 className="outfit-bold">Coloque sua empresa no mercado digital!</h1>
      <div className="services-cards-container">
        {data.services.map((service, i) => (
          <CardServices
            key={i}
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
