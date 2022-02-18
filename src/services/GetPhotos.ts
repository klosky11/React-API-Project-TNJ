import axios from "axios";




export async function getPhoto(city: string) {

  const response = await axios
    .get(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=photo&input=${city}&inputtype=textquery&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`
    );
    
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${response.data.candidates[0].photos[0].photo_reference}&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`
   
  
    // const imageBlob = await photoResponse.blob()
    // const imageObjectURL = URL.createObjectURL(imageBlob)
    //  photoResponse.data = await 

    // .then((response) => {
    // return axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${response.data.candidates[0].photos[0].photo_reference}&key=${process.env.REACT_APP_GPHOTOSAPI_KEY}`)
    // .then((photoResponse) => {
    //  return photoResponse.data
    // })

    
  
    }
