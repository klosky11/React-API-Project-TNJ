import { useEffect, useState } from "react";
import { Event, TicketResponse } from "../Models/TicketResponse";
import { getTMEvents } from "../services/GetTMEvents";
import { EventResultsList } from "./EventResultList";

export function EventResults(props: { events?: Event[] }) {
  function sortEvents(events?: Event[]) {
    return events?.sort(function (a, b) {
      let dateA: any = new Date(a.dates.start.localDate);
      let dateB: any = new Date(b.dates.start.localDate);
      return dateA - dateB;
    });
  }
  return (
    <div>
    <h1 className="events-header">
    {" "}
    Events happening close to your destination :
  </h1>
    <div className="events-container">
    

      <ul>
        {sortEvents(props.events)?.map((item) => (
          <li key={item.id}>
            {" "}
            <EventResultsList event={item}></EventResultsList>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
