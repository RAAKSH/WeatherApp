//import '../App.css';
import Search from './Search/searchComponent';
import CurrentWeather from './CurrentWeather/currentWeatherComponent';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../API/api';
import { useState } from 'react';
import ForeCast from './ForeCast/foreCastComponent';

function HomePage() {

  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    const forecastFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forecastResponse });

      })
      .catch((err) => console.log(err));
  }



  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForeCast data={forecast} />}
    </div>
  );
}

export default HomePage;
