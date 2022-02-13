import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TicketResponse } from "../Models/TicketResponse";
import { getTMEvents } from "../services/GetTMEvents";
import { getWeather } from "../services/GetWeather";
import { EventResults } from "./EventResults";
import { WeatherResult } from "./WeatherResult";

export function TripResult() {
  const [tripResultsWeather, setTripResultsWeather] = useState([]);
  const [tripResultsEvents, setTripResultsEvents] =
    useState<TicketResponse | null>(null);

  const [searchParams] = useSearchParams();

  if (searchParams.get("destination")) {
    const city = searchParams.get("destination");
  }
  if (searchParams.get("arrivalDate")) {
    const startDate = searchParams.get("arrivalDate");
    console.log(startDate);
  }
  if (searchParams.get("departureDate")) {
    const endDate = searchParams.get("departureDate");
    console.log(endDate);
  }

  useEffect(() => {
    getWeather(
      searchParams.get("destination")!,
      searchParams.get("arrivalDate")!,
      searchParams.get("departureDate")!
    ).then((data) => setTripResultsWeather(data));
    getTMEvents(
      searchParams.get("destination")!,
      searchParams.get("arrivalDate")!,
      searchParams.get("departureDate")!
    ).then((data) => setTripResultsEvents(data));
  }, []);
  console.log(tripResultsEvents);
  console.log(tripResultsWeather);
  return (
    <div>
      <EventResults events={tripResultsEvents!._embedded.events} />
    </div>
  );
}
