import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./searchPage.css";
import { TripResult } from "./TripResult";

export function SearchPage() {
  const [searchForm, setSearchForm] = useState({
    searchTerm: "",
    startDate: "",
    endDate: "",
  });

  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const navigate = useNavigate();

  function submitHandler() {
    navigate(`/?result=${destination}&`);
  }

  return (
    <div className="main">
      <div className="map-div"></div>
      {/* just some placeholder text and background for now */}
      <h1>Plan your getaway and your play</h1>

      {/* <input type="search" placeholder="Where to?" value={searchForm.searchTerm}></input> */}

      <form>
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
        <Link to="/tripResult/" onClick={submitHandler}>
          {" "}
          Plan Trip
        </Link>
      </form>
    </div>
  );
}
