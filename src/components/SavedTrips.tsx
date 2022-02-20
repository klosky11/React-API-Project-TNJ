import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";

export function SavedTrips() {
  const { trips, removeTrip } = useContext(TripContext);

  const navigate = useNavigate();

  function handleGoToTrip(e: any) {
    const foundTrip = trips.find((trip) => trip.URL === e.target.id);

    console.log(foundTrip);
    console.log(e.target.id);
    navigate(`/tripResult` + foundTrip?.URL);
  }

  function handleRemove(e: any) {
    console.log(e.target.id);
    removeTrip(e.target.id);
  }

  return (
    <div>
      <ul>
        {trips.map((trip, index) => (
          <li key={trip.URL}>
            {`${trip.searchTerm}: ${trip.arrivalDate}-${trip.departureDate}`}

            <button id={trip.URL} onClick={handleGoToTrip}>
              Go To Trip
            </button>

            <button id={trip.URL} onClick={(e) => handleRemove(e)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
