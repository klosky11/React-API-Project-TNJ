import { WeatherResultListForecasted } from "./WeatherResultListForecasted";
import "../css/weatherResults.css";

export function WeatherResult(prop: { weather?: any[] }) {
  return (
    <div className="weather-container">
      <h1 className="weather-header"> Weather during your stay :</h1>

      {/* {prop.weather?.days} */}
      <ul className="weatherContainer">
        {prop.weather?.map((item) => (
          <li key={item.datetime} className="weatherCell">
            {" "}
            <WeatherResultListForecasted
              weather={item}
            ></WeatherResultListForecasted>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
