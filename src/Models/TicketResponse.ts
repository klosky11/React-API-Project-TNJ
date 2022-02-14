export interface TicketResponse {
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  _embedded: _embedded;
  self: { href: string };
}
export interface _embedded {
  events: Event[];
}
export interface Event {
  name: string;
  id: string;
  url: string;
  images?: Images[];
  dates: Dates;
  _embedded: Embedded;
  classifications: Classifications[];
}

export interface Images {
  url: string;
}

export interface Dates {
  start: Start;
  status: { code: string };
  spanMultipleDays: boolean;
}

export interface Start {
  localDate: string;
  localTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}

export interface Embedded {
  venues: Venues[];
}

export interface Venues {
  name: string;
  city: { name: string };
  state: { stateCode: string };
}

export interface Classifications {
  segment: { name: string };
}
