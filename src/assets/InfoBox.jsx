import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";


import "./InfoBox.css";


export default function InfoBox({ info }) {
  const INIT_URL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s";


    const HOT_URL="https://static.scientificamerican.com/sciam/cache/file/43D27305-AF9A-42FE-B06C7A4F81F94166_source.jpg?w=1200";
    const RAIN_URL="https://www.hindustantimes.com/ht-img/img/2025/01/19/550x309/INDIA-WEATHER-RAIN-0_1737252870829_1737252882028.jpg";
    const COLD_URL="https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg";


  return (
    <div className="InfoBox">
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL} alt="weather image" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <div>Temprature={info.temp}&deg;C</div>
              <div>Humidity={info.humidity}</div>
              <div>Min Temprature={info.tempMin}&deg;C</div>
              <div>Max Temprature={info.tempMax}&deg;C</div>
              <div>Weather={info.weather}</div>
              <div>Feels Like={info.fellsLike}</div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
