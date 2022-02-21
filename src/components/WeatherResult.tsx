import { WeatherResultListForecasted } from "./WeatherResultListForecasted";

export function WeatherResult(prop: { weather?: any[] }) {
  return (
    <div className="weather-container">
      <h1 className="weather-header"> Weather during your stay :</h1>

      {/* {prop.weather?.days} */}
      <ul>
        {prop.weather?.map((item) => (
          <li key={item.datetime}>
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
