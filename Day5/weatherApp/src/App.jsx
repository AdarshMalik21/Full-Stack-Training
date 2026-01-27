import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [cordinates, setCordinates] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleSubmit(e){
    e.preventDefault();
    if(!city) return;
    fetchCordinates(city);
  }

  async function fetchCordinates(city){
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
      const data = await response.json();
      if(data.results?.length > 0){
        setCordinates({
          lat: data.results[0].latitude,
          lon: data.results[0].longitude
        });
      }
      
  }
  
  useEffect(() => {
  

  async function fetchWeather() {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${cordinates.lat}&longitude=${cordinates.lon}&current_weather=true`
    );
    const data = await res.json();
    setWeather(data.current_weather);
  }

  fetchWeather();
}, [cordinates]);

  return (
    <>
      <div className='text-2xl'>Enter your city</div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter here' value={city} onChange={(e) => setCity(e.target.value)} />
      <button type = "submit">Search</button>
      </form>

      {weather ?  (
      <div>
        <p>Temperature: {weather.temperature}°C</p>
        <p>Wind Speed: {weather.windspeed} km/h</p>
      </div>
):null}
    </>
  )
}

export default App
