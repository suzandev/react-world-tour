import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountries = (country) => {
    console.log("add this to your visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
      <div className="country_container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelVisitedCountries={handelVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
}
