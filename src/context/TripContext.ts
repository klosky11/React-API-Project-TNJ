import { createContext } from "react";
import { Trip } from "../Models/Trip";

export interface TripContextModel {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  removeTrip: (id: string) => void;
}

const defaultValue: TripContextModel = {
  trips: [],
  addTrip: () => {},
  removeTrip: () => {},
};

export const TripContext = createContext<TripContextModel>(defaultValue);
