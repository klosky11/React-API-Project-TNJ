import axios from "axios";
import { TicketResponse } from "../Models/TicketResponse";

export function getTMEvents(
  city: string,
  startDate: string,
  endDate: string
): Promise<TicketResponse> {
  return axios
    .get<TicketResponse>(
      `https://app.ticketmaster.com/discovery/v2/events.json`,
      {
        params: {
          city: city,
          startDateTime: `${startDate}T00:00:00Z`,
          endDateTime: `${endDate}T00:00:00Z`,
          apikey: process.env.REACT_APP_TMAPI_KEY,
        },
      }
    )
    .then((reponse) => reponse.data);
}
