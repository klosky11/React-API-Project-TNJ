import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TripResult } from "./components/TripResult";
import { SearchPage } from "./components/SearchPage";

function App() {
  return (
    <div className="App">
     
      <SearchPage></SearchPage>
    </div>
  );
}

export default App;
