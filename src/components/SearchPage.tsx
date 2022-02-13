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
    <div className="main">
      <div className="map-div"></div>
      {/* just some placeholder text and background for now */}
      <h1>Plan your getaway and your play</h1>

      {/* <input type="search" placeholder="Where to?" value={searchForm.searchTerm}></input> */}

      <form onSubmit={submitHandler}>
        <input
          type="search"
          placeholder="Where to?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        ></input>
        <input
          type="date"
          placeholder="Arrival date YYYY-MM-DD"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        ></input>
        <input
          type="date"
          placeholder="Departured date YYYY-MM-DD"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        ></input>
        <button type="submit">Plan Trip</button>
      </form>
    </div>
  );
}
