import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TicketResponse } from "../Models/TicketResponse";
import { getTMEvents } from "../services/GetTMEvents";
import { getWeather } from "../services/GetWeather";
import { EventResults } from "./EventResults";
import { WeatherResult } from "./WeatherResult";

export function TripResult() {
  const [tripResultsWeather, setTripResultsWeather] = useState([]);
  const [tripResultsEvents, setTripResultsEvents] = useState<
    TicketResponse | undefined
  >();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const destination = searchParams.get("destination");
    const arrivalDate = searchParams.get("arrivalDate");
    const departureDate = searchParams.get("departureDate");
    if (destination && arrivalDate && departureDate) {
      getWeather(destination, arrivalDate, departureDate).then((data) =>
        setTripResultsWeather(data)
      );
      getTMEvents(destination, arrivalDate, departureDate).then((data) =>
        setTripResultsEvents(data)
      );
    }
  }, [searchParams]);

  return (
    <div>
      <EventResults events={tripResultsEvents} />
    </div>
  );
}
