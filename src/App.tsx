import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TripResult } from "./components/TripResult";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TripResult />
    </div>
  );
}

export default App;
