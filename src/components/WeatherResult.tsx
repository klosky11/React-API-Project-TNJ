import { WeatherResultListForecasted } from "./WeatherResultListForecasted";
import "../css/weatherResults.css";
import { propTypes } from "react-bootstrap/esm/Image";

export function WeatherResult(prop: { weather?: any[] }) {
<<<<<<< HEAD
  function mapWeatherList() {
    prop.weather?.map((item) => {
      return (
        <div>
=======
  return (
    <div className="weather-container">
      <h1 className="weather-header"> Weather during your stay :</h1>

      {/* {prop.weather?.days} */}
      <ul className="weatherContainer">
        {prop.weather?.map((item) => (
>>>>>>> 8497208973a7ef2ae90187bc858101c3055a103a
          <li key={item.datetime} className="weatherCell">
            {" "}
            <WeatherResultListForecasted
              weather={item}
            ></WeatherResultListForecasted>{" "}
          </li>
          <hr></hr>
        </div>
      );
    });
  }
  return (
    <div>
      <h1 className="weather-header"> Weather during your stay :</h1>

      <ul className="weatherContainer">
        {prop.weather?.map((item) => (
          <div className="hrContainer">
            <li key={item.datetime} className="weatherCell">
              {" "}
              <WeatherResultListForecasted
                weather={item}
              ></WeatherResultListForecasted>{" "}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
