<<<<<<< HEAD
import { Events } from "../Models/TicketResponse";
import { EventResults } from "./EventResults";

export function EventResultsList(props: { events: Events[] }) {
  return (

    <div>

      {props.events.map((event) => (
        <EventResults key={event.id} events={event}></EventResults>
      ))}

      <button className="add-saved">Favorite</button>
      
=======
import { Event } from "../Models/TicketResponse";
import { EventResults } from "./EventResults";

export function EventResultsList(props: { events: Event[] }) {
  return (
    <div>
      {/* {props.events.map(event =>  <EventResults key={event.id} events={event}></EventResults>)} */}

      <button className="add-saved">Favorite</button>
>>>>>>> c0939ea1884f776f6cca2ad012ca8b2b9b108f98
    </div>
  );
}
