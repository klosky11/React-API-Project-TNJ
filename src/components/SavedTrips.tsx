import { useContext } from "react";
import { TripContext } from "../context/TripContext";

export function SavedTrips() {
  const { trips, removeTrip } = useContext(TripContext);

  function handleSubmit(e: any) {
    const queryStringParams: any = {};
    queryStringParams.destination = destination;
    queryStringParams.arrivalDate = arrivalDate;
    queryStringParams.departureDate = departureDate;
    setSearchParams(new URLSearchParams(queryStringParams));
    navigate(
      `/tripResult?` + new URLSearchParams(queryStringParams).toString()
    );
  }

  return (
    <div>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            {`${trip.searchTerm}: ${trip.arrivalDate}-${trip.departureDate}`}
            <button onClick={handleSubmit}>Go To Trip</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
