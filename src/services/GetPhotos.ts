import axios from "axios";

// export async function getPlaces(city: string) {

//     const proxyUrl = "https://my-cors-anywhere-deployment/";
//     const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=photo&input=${city}&inputtype=textquery&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`;

//     const initialPlacesRequest = await axios
//     .get(proxyUrl + placesRequestUrl)
//     .then((response) => response.data);
//     const photoRef = initialPlacesRequest?.data?.candidates?.[0]?.photos?.[0]?.photo_reference;

// }

export function getPhoto(photo_ref?: string) {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/place/photo?photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT&key=AIzaSyBdTQ-iIeLfhZdZW0Jul7bAP4n2hgz5JCI&maxwidth=400`
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
