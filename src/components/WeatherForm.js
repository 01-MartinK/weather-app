import React, { useRef, useState } from 'react';

import classes from './WeatherForm.module.css';

function WeatherForm(props) {
        const cityRef = useRef('');

        function submithandler(e) {
            e.preventDefault();

            props.changeCity(cityRef.current.value);
        }

        return (
            <div class="card">
                <form onSubmit={submithandler}>
                    <input type='text' id='city' ref={cityRef} placeholder="Tartu"/>
                    <input type="submit" value="Set"></input>
                </form>
            </div>
        );
}

export default WeatherForm;