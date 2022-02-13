import { useEffect, useState } from "react";
import { Event, TicketResponse } from "../Models/TicketResponse";
import { getTMEvents } from "../services/GetTMEvents";
import { EventResultsList } from "./EventResultList";

export function EventResults(props: { events?: TicketResponse }) {
  return (
    <div>
      <h1> Events happening close to your destination</h1>

      <h2>{props.events?._embedded.events[0].name}</h2>
      <p>{props.events?._embedded.events[0].dates.start.localDate}</p>
      <p>{props.events?._embedded.events[0].url}</p>
    </div>
  );
}
