import { Event } from "../Models/TicketResponse";
import { EventResults } from "./EventResults";
import "./eventResultList.css";

export function EventResultsList(props: { event?: Event }) {
  function convertDate(date?: string, time?: string) {
    const dateArray: any = date?.split("-");
    let timeArray: any = time?.split(":");
    let month = "";
    let amOrpm = "am";
    switch (dateArray[1]) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
    }
    if (parseInt(timeArray[0]) > 11) {
      amOrpm = "pm";
    }
    if (parseInt(timeArray[0]) > 12) {
      timeArray[0] = parseInt(timeArray[0]) - 12;
    }

    return `${month} ${dateArray[2]}, ${dateArray[0]} ${timeArray[0]}:${timeArray[1]}${amOrpm}`;
  }
  return (
    <div className="events-container">
      <img
        className="event-image"
        alt="EventImage"
        src={props.event?.images[1].url}
      />
      <div className="date-title-venue-container">
        <p className="event-date">
          {" "}
          {convertDate(
            props.event?.dates.start.localDate,
            props.event?.dates.start.localTime
          )}
        </p>
        <h2 className="event-title">{props.event?.name}</h2>
        <p className="event-venue">{`${props.event?._embedded.venues[0].name},  ${props.event?._embedded.venues[0].city.name}`}</p>
      </div>

      <a className="ticket-link" href={props.event?.url}>
        Tickets
      </a>
    </div>
  );
}
