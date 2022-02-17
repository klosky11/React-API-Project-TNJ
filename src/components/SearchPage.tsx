import { FormEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./searchPage.css";
import { TripResult } from "./TripResult";

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const navigate = useNavigate();

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    const queryStringParams: any = {};
    queryStringParams.destination = destination;
    queryStringParams.arrivalDate = arrivalDate;
    queryStringParams.departureDate = departureDate;
    setSearchParams(new URLSearchParams(queryStringParams));
    navigate(
      `/tripResult?` + new URLSearchParams(queryStringParams).toString()
    );
  }

  return (
    <div className="main-container">
      <img className="main-page-pic" src="./event.jpg" />

      <h1 className="main-paragraph">
        Turn your trip into an <span className="adventure">adventure.</span>
      </h1>

      <div className="form-container">
        <form onSubmit={submitHandler}>
          <input
            className="where-to"
            type="search"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          ></input>

          <input
            className="date-input"
            type="date"
            placeholder="Arrival date YYYY-MM-DD"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          ></input>

          <input
            className="date-input"
            type="date"
            placeholder="Departured date YYYY-MM-DD"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          ></input>

          <button className="find-events-button" type="submit">
            Find Events
          </button>
        </form>
      </div>
    </div>
  );
}
