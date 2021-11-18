import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* images */
import sunshine from '../assets/img/sunshine.png';
import partialSunIcon from '../assets/img/partial-sun.png';
import clouds from '../assets/img/clouds.png';
import fog from '../assets/img/fog.png';
import sunRain from '../assets/img/sun-rain.png';
import heavyRain from '../assets/img/heavy-rain.png';
import slightSnow from '../assets/img/slight-snow.png';
import heavySnow from '../assets/img/heavy-snow.png';
import thunderstorm from '../assets/img/thunderstorm.png';

const icons = {
    0: sunshine,
    2: partialSunIcon,
    3: clouds,
    45: fog,
    51:	sunRain,
    65:	heavyRain,
    71:	slightSnow,
    75:	heavySnow,
    80:	heavyRain,
    85:	heavySnow,
    95:	thunderstorm,
};


const WeatherCode = (props) => {

    /* effect */
    useEffect(() => {
        /* calcul interval */
    }, []);

    return (
        <img
            src={ icons[props.code] }
            alt={ icons[props.code]?.slice(14).split('.')[0] }
            className="weathercode-img"
        />
    );

}

WeatherCode.propTypes = {
    code: PropTypes.number.isRequired,
}

export default WeatherCode;
