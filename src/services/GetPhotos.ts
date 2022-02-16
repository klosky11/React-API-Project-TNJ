import axios from "axios";




export async function getPlaces(city: string) {

    const proxyUrl = "https://my-cors-anywhere-deployment/";
    const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=photo&input=${city}&inputtype=textquery&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`;

    const initialPlacesRequest = await axios
    .get(proxyUrl + placesRequestUrl)
    .then((response) => response.data);
    const photoRef = initialPlacesRequest?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;
  
}




export function getPhoto(photo_ref: string) {
    return axios
      .get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${photo_ref}&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`
      )
      .then((response) => response.data);
  }