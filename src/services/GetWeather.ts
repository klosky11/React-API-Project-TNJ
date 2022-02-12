import axios from "axios";

export function getWeather(city: string, startDate: string, endDate: string) {
  return axios
    .get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=us&key=${process.env.REACT_APP_VSWEATHERAPI_KEY}&contentType=json`
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
