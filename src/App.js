import React, { useState } from 'react';
import Weather from './Weather'
import './App.css';

function App() {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState()

  function getLocation(location) {
    console.log(location)
    
    let url = `http://api.weatherapi.com/v1/forecast.json?key=561f47b3f56a48c1812102405211504&q=${location}&days=1&aqi=yes`
    // console.log(url)
    fetch(url)
      .then(response => {
        if (!response.ok) {
          window.alert('Invaild Location');
          return;
        }
        return response.json()
      })
      .then(data =>setWeatherData(data) )
  }
  return (
    <div className="App">
      <div className="header">
        <h1> Weather and Pollution Info</h1>
        <p>Enter a Location: </p>
        <input type='text' value={location} onChange={e => { setLocation(e.target.value); e.target.value = '' }} />
        <p>
          <input className='button' value='Get Info' type='button' onClick={() => getLocation(location)} />
        </p>
        {weatherData && <Weather data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
