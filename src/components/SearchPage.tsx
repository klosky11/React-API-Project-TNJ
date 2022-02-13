import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchPage.css";

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
  function onSubmit() {
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
        <button
          onClick={(e) => {
            onSubmit();
            e.preventDefault();
          }}
        >
          Search
        </button>
      </form>
      <select>
        <option value={1}>Jan</option>
        <option value={2}>Feb</option>
        <option value={3}>Mar</option>
        <option value={4}>Apr</option>
        <option value={5}>May</option>
        <option value={6}>Jun</option>
        <option value={7}>Jul</option>
        <option value={8}>Aug</option>
        <option value={9}>Sep</option>
        <option value={10}>Oct</option>
        <option value={11}>Nov</option>
        <option value={12}>Dec</option>
      </select>
    </div>
  );
}
