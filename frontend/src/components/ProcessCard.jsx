import React from "react";

import "./ProcessCard.css";

const ProcessCard = ({ icon, area, description, data, onChange}) => {
  return (
    <label className={`process-cards ourfit-normal ${area == data.area? "active" : ""}`}>
      <input type="radio" name="area" value={area} checked={area==data.area} onChange={onChange} style={{opacity: 0}}/>
      {icon}
      <h2>{area}</h2>
      <p>{description}</p>
    </label>
  );
};

export default ProcessCard;
