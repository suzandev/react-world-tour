import { useState } from "react";
import "./country.css";
export default function Country({ country, handelVisitedCountries }) {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>{name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handelVisitedCountries(country)}>
        Mark Visited
      </button>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? " I have been visited" : " I want to be visited"}
    </div>
  );
}
