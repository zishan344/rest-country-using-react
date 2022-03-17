import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, area, capital, flags, region, population } = props.country;

  console.log(props.country);
  return (
    <div className="country">
      <h2>Name :{name.common}</h2>
      <img src={flags.png} alt="" />
      <h4>capital :{capital}</h4>
      <h3>Region: {region}</h3>
      <h5>Area: {area}</h5>
      <h3>Population: {population}</h3>
    </div>
  );
};

export default Country;
