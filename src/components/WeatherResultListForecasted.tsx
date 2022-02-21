import "bootstrap/dist/css/bootstrap.min.css";

export function WeatherResultListForecasted(prop: { weather?: any }) {
  function convertDate(date?: string) {
    let dayOfWeek;
    if (date) {
      dayOfWeek = new Date(date).getDay();
    }
    const dateArray: any = date?.split("-");
    let month = "";

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

    switch (dayOfWeek) {
      case 0:
        dayOfWeek = "Sunday";
        break;
      case 1:
        dayOfWeek = "Monday";
        break;
      case 2:
        dayOfWeek = "Tuesday";
        break;
      case 3:
        dayOfWeek = "Wednesday";
        break;
      case 4:
        dayOfWeek = "Thursday";
        break;
      case 5:
        dayOfWeek = "Friday";
        break;
      case 6:
        dayOfWeek = "Saturday";
        break;
    }

    return `${dayOfWeek} - \n${month} ${dateArray[2]}`;
  }
  return (
    <div className="weather">
      <h2>{convertDate(prop.weather?.datetime)}</h2>
      <img
        className=""
        src={process.env.PUBLIC_URL + `/iconimages/${prop.weather?.icon}.png`}
        alt={"icon"}
      />

      <h4>{prop.weather?.description}</h4>
      <p>Temp Highs:{prop.weather?.tempmax}</p>
      <p>Temp Low:{prop.weather?.tempmin}</p>
      <p>Feels Like:{prop.weather?.feelslike}</p>
      {/* {(prop.weather?.preciptype.length >= 1) ? prop.weather?.preciptype.map((precip,index) => <p key={index}> {precip}</p>) : "" }   */}
      <p>Precipitation %:{prop.weather?.preciprob}</p>
      <p>Wind:{prop.weather?.windspeed}</p>
    </div>
  );
}
