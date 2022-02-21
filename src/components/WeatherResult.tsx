import { WeatherResultListForecasted } from "./WeatherResultListForecasted";
import "../css/weatherResults.css";
import { propTypes } from "react-bootstrap/esm/Image";

export function WeatherResult(prop: { weather?: any[] }) {
<<<<<<< HEAD
 
=======
>>>>>>> f6f522dcb0535d66ad4ca807dcf7dc91edc66ff9
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
