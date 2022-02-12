import { useState } from "react";
import "./searchPage.css"

export function SearchPage() {
  const [searchForm, setSearchForm] = useState({
    searchTerm: "",
    startDate: "",
    endDate: "",
  });

  return (
    <div className="main">
       <div className="map-div"></div>
      {/* just some placeholder text and background for now */}
      <h1>Plan your getaway and your play</h1>
      <div className="inputs">
      <input type="search" placeholder="Where to?" value={searchForm.searchTerm}></input>
      <input type="search" placeholder="Arrival date-Departured date"></input>
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
    </div>
  );
}
