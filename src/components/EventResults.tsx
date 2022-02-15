import { useEffect, useState } from "react";
import { Event, TicketResponse } from "../Models/TicketResponse";
import { getTMEvents } from "../services/GetTMEvents";
import { EventResultsList } from "./EventResultList";
import "./eventResults.css";

export function EventResults(props: { events?: Event[] }) {
  return (
    <div>
      <h1 className="events-header">
        {" "}
        Events happening close to your destination :
      </h1>

      <ul>
      {props.events?.map(item => <li key={item.id} > <EventResultsList event={item}></EventResultsList></li>)}
    
      </ul>
    </div>
  );
}
