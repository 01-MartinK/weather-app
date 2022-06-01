import React, { useState, useEffect, useCallback } from 'react';

import logo from './logo.svg';
import './App.css';

import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState("Tartu");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const key = '77f97b598769bf8861004c74e30ebbba';

  const fetchNewWeatherDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
    
  }, [city]);

  useEffect(() => {
    fetchNewWeatherDataHandler();
  }, [fetchNewWeatherDataHandler]);

  const cityChangeInit = (new_city) => {
    setCity(new_city)
    fetchNewWeatherDataHandler()
  }

  return (
    <React.Fragment>
      <section>
        <div className="App">
          {!isLoading && <WeatherDisplay weatherData={weatherData}/>}
          <WeatherForm changeCity={cityChangeInit}/>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
