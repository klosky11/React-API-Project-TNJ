import { useEffect, useState } from "react";
import { getTMEvents } from "../services/GetTMEvents";
import { getWeather } from "../services/GetWeather";

export function TripResult(props: {
  city?: string;
  startDate?: string;
  endDate?: string;
}) {
  const [tripResultsWeather, setTripResultsWeather] = useState([]);
  const [tripResultsEvents, setTripResultsEvents] = useState([]);

  useEffect(() => {
    getWeather(
      /*props.city*/ "detroit",
      /* props.startDate*/ "2022-03-01",
      /*props.endDate*/ "2022-03-05"
    ).then((data) => setTripResultsWeather(data));
    getTMEvents(
      /*props.city*/ "detroit",
      /* props.startDate*/ "2022-03-01",
      /*props.endDate*/ "2022-03-05"
    ).then((data) => setTripResultsEvents(data));
  }, []);
  console.log(tripResultsEvents);
  console.log(tripResultsWeather);
  return <div>test</div>;
}
