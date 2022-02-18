import { useContext } from "react";
import { TripContext } from "../context/TripContext";

export function SavedTrips() {
  const { trips, removeTrip } = useContext(TripContext);

  return (
    <div>
      <ul>
        {trips.map((trip, index) => (
          <li
            key={index}
          >{`${trip.searchTerm}: ${trip.arrivalDate}-${trip.departureDate}`}</li>
        ))}
      </ul>
    </div>
  );
}
