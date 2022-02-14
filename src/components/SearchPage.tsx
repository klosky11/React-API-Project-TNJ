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

  const navigate = useNavigate()

<<<<<<< HEAD
  function submitHandler(){
      navigate(`/?result=${destination}&`)
  }
  function onSubmit() {
    navigate(`/?result=${destination}&`);
=======
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
>>>>>>> c0939ea1884f776f6cca2ad012ca8b2b9b108f98
  }

  return (
    <div className="main">
      <div className="map-div"></div>
      {/* just some placeholder text and background for now */}
      <h1 className="main-paragraph">
        Turn your trip into an <span className="adventure">adventure.</span>
      </h1>

      {/* <input type="search" placeholder="Where to?" value={searchForm.searchTerm}></input> */}
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
          <button type="submit">Find Events</button>
        </form>
      </div>
    </div>
  );
}

