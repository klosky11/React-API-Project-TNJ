

export function WeatherResultListForecasted(prop: {weather?:any}) {

    return(
        <div className="weather">
            
            {/* <img src={prop.weather?.days}/> */}
            <h4>{prop.weather?.description}</h4>
             <p>Temp Highs:{prop.weather?.tempmax}</p>
             <p>Temp Low:{prop.weather?.tempmin}</p>
             <p>Feels Like:{prop.weather?.feelslike}</p>
            {/* {(prop.weather?.preciptype.length >= 1) ? prop.weather?.preciptype.map((precip,index) => <p key={index}> {precip}</p>) : "" }   */}
            <p>Precipitation %:{prop.weather?.preciprob}</p>
            <p>Wind:{prop.weather?.windspeed}</p>
        </div>
    )
}