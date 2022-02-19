import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../context/TripContext";



export function SavedTrips() {
  const { trips, removeTrip } = useContext(TripContext);


 const navigate = useNavigate()

  function handleSubmit(e:any) {
  
  //  navigate(
  //    `/tripResult?` + trip.URL
  //  )
  console.log(e)
  
  }


  

  return (
    <div>
      <ul>
        {trips.map((trip, index) => (

          <li key={trip.URL + index}>
            {`${trip.searchTerm}: ${trip.arrivalDate}-${trip.departureDate}`}
            {trip.id = trip.URL + index}
            <button onClick={handleSubmit}>Go To Trip</button>
            <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
