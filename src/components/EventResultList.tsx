import { Event } from "../Models/TicketResponse";
import { EventResults } from "./EventResults";
import "./eventResultList.css"

export function EventResultsList(props: { event?: Event }) {
  return (
    <div className="event-list">
     
     <h2>{props.event?.name}</h2>
     <p>{props.event?.dates.start.localDate}</p>
     <a href={props.event?.url}>Tickets</a>
     <img src={props.event?.images[1].url}/>

      <button className="add-saved">Favorite</button> 
    </div>
  );
}
