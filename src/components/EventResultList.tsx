import { Event } from "../Models/TicketResponse";
import { EventResults } from "./EventResults";

export function EventResultsList(props: { events: Event[] }) {
  return (
    <div>
      {/* {props.events.map(event =>  <EventResults key={event.id} events={event}></EventResults>)} */}

      <button className="add-saved">Favorite</button>
    </div>
  );
}
