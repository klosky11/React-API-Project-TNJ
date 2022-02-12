import axios from "axios";

export function getTMEvents(city: string, startDate: string, endDate: string) {
  return axios
    .get(
      `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T00:00:00Z&apikey=${process.env.REACT_APP_TMAPI_KEY}`
    )
    .then((reponse) => reponse.data);
}
