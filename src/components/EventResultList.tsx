import { Event } from "../Models/TicketResponse";
import { EventResults } from "./EventResults";
import "./eventResultList.css";

export function EventResultsList(props: { event?: Event }) {
  return (
    <div className="event-container">
      <img className="event-image" src={props.event?.images[1].url} />
      <div className="title-date-tickets">
        <p className="event-date"> {props.event?.dates.start.localDate}</p>
        <h2 className="event-title">{props.event?.name}</h2>

        {/* <a className="ticket-link" href={props.event?.url}>
          See Tickets
        </a> */}
      </div>

      {/* <button className="favorite-button">Favorite</button> */}
      <a className="ticket-link" href={props.event?.url}>
        See Tickets
      </a>
    </div>
  );
}
