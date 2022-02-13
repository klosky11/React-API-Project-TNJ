import { useEffect, useState } from "react";
import { Event } from "../Models/TicketResponse";
import { getTMEvents } from "../services/GetTMEvents";
import { EventResultsList } from "./EventResultList";

export function EventResults(props: { events: Event }) {
  return (
    <div>
      <h1> Events happening close to your destination</h1>

      <h2>{props.events[0].name}</h2>
      <p>{props.events[0].dates}</p>
      <p>{props.events[0].url}</p>
    </div>
  );
}
