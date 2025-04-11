import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export function SearchBox({updateInfo}){

  let [city,setCity]=useState("");
  let [error,setError]=useState(false);



  const API_URL="https://api.openweathermap.org/data/2.5/weather";
  const API_KEY="a04e784f8196e4e48583cd6ad1506992";



  let getWeatherInfo=async()=>{
  try{
    let respone=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonrespone=await respone.json();


    let result={
      city: city,
      temp: jsonrespone.main.temp,
      tempMin: jsonrespone.main.temp_min,
      tempMax: jsonrespone.main.temp_max,
      humidity: jsonrespone.main.humidity,
      fellsLike: jsonrespone.main.feels_like,
      weather: jsonrespone.weather[0].description,

    };


    console.log(result);
    return result;
  }catch(error){
    throw error;

  }
  };

    

  let handleChange =(evt) =>{
    setCity(evt.target.value);
  }

  let handleSubmit = async(event) => {
   try{
    event.preventDefault(); // Prevents page reload
    console.log(city);
    setCity("");
   let info=await getWeatherInfo();
   updateInfo(info);
   }catch(error){
   setError(true);
   }
};

    return (
        <div className='SearchBox'>
             <form onSubmit={handleSubmit}>
             <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange} />
             <br></br><br/>
             <Button variant="contained" type='submit'>search</Button>
             {error && <p style={{color:"red"}}>No such place exist!</p>}
             </form>
        </div>
    );
}

