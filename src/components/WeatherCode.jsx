import React from 'react';

const WeatherCode = (props) => {

    const icons = {
        0: 'sunshine',
        2: 'partial-sun',
        3: 'clouds',
        45: 'fog',
        51:	'sun-rain',
        65:	'heavy-rain',
        71:	'slight-snow',
        75:	'heavy-snow',
        80:	'heavy-rain',
        85:	'heavy-snow',
        95:	'thunderstorm',
    };

    return (
        <img
            src={ "https://lpmiaw-react.napkid.dev/img/weather/" + icons[props.code] + ".png" }
            alt="sunshine"
            className="weathercode-img"
        />
    );

}

export default WeatherCode;
