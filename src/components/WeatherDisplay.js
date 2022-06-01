import React, { Component, useState } from 'react';

import classes from './WeatherDisplay.module.css';

const WeatherDisplay = (props) => {

    return (
        <div class="card">
            <h2 id="">{ props.weatherData.name }</h2>
            <h3 id="temp">{ props.weatherData.main.temp }</h3>
            <h3>{ props.weatherData.weather[0].description }</h3>
        </div>
    );
}

export default WeatherDisplay;