import React, { useState } from 'react'
import axios from 'axios'

export default function Weather() {
    
    const [city, setCity] = useState();
    const[weather, setWeather ] = useState()
    const handleCItyChange = (event) => {
        setCity(event.target.value)
    }
    const fetchWeather = async () => {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'13a60640d5cd2f82aff6d2bc6e1781df'}`)
           setWeather(response)
            
        }
        catch(error){
            console.log("Error fetchng wetaher data");
            
        }
    } 
    console.log(weather, 'weather');
    
    const handleClick = () => {
        fetchWeather();
    }
   return (
    <div className='weather-container'>
      <input type='text' placeholder='Enter City name' value={city} onChange={handleCItyChange}/>
      <button onClick={handleClick}>Get Weather</button>
      {weather && <>
      <div className='weather-info'>
        <h2>{weather.data.name}</h2>
        <p>Temp is {weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
      </div>
      </>}
    </div>
  )
}
