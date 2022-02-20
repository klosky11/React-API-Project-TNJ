import { ReactNode, useState } from "react";
import { Trip } from "../Models/Trip";
import { TripContext } from "./TripContext";

export function TripContextProvider(props: { children: ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>([]);

  function addTrip(trip: Trip) {
    setTrips((prev) => [...prev, trip]);
  }

  function removeTrip(id: string) {
    const found = trips.find((trip) => trip.URL === id);

    if (found !== undefined) {
      const index = trips.indexOf(found);

      setTrips((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }
  }

  return (
    <TripContext.Provider value={{ trips, addTrip, removeTrip }}>
      {props.children}
    </TripContext.Provider>
  );
}
