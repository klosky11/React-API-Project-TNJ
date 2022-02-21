import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";
import "./savedTrips.css";

export function SavedTrips() {
  const { trips, removeTrip } = useContext(TripContext);

  const navigate = useNavigate();

  function handleGoToTrip(e: any) {
    const foundTrip = trips.find((trip) => trip.URL === e.target.id);
    navigate(`/tripResult` + foundTrip?.URL);
  }

  function handleRemove(e: any) {
    removeTrip(e.target.id);
  }

  return (
    <div>
      <img
        className="save-trips-page-pic"
        src="ian-dooley-DuBNA1QMpPA-unsplash.jpg"
      />
      <ul className="saved-list-container">
        <h1 className="saved-header">Your Saved Trips :</h1>
        {trips.map((trip, index) => (
          <li className="saved-line" key={trip.URL}>
            {`${trip.searchTerm}: ${trip.arrivalDate} to ${trip.departureDate}`}

            <button
              className="saved-page-buttons"
              id={trip.URL}
              onClick={handleGoToTrip}
            >
              Go To Trip
            </button>

            <button
              className="saved-page-buttons"
              id={trip.URL}
              onClick={(e) => handleRemove(e)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
