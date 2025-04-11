import { useState } from "react";
import { SearchBox } from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city:"Mumbai",
    temp: 27.20,
  tempMin: 27.20,
  tempMax: 27.20,
  humidity: 60,
  fellsLike: 24.84,
  weather: "clear sky",
  });

  let updateInfo =(newresult)=>{

    setWeatherInfo(newresult);

  }

  return (
    <div className="weathercontainer">
      <h1>The Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
