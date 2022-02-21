import { WeatherResultListForecasted } from "./WeatherResultListForecasted";
import "../css/weatherResults.css";
import { propTypes } from "react-bootstrap/esm/Image";

export function WeatherResult(prop: { weather?: any[] }) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
 
=======
>>>>>>> f6f522dcb0535d66ad4ca807dcf7dc91edc66ff9
>>>>>>> e31eab73fb0d7bdfe2faedbcc08bb0f1ab7c26c5
  return (
    <div>
      <h1 className="weather-header"> </h1>

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
