import axios from "axios";




export function getPlaces(city: string) {

  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=photo&input=${city}&inputtype=textquery&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`
    )
    .then((response) => response.data);

    
  
}
