import React from 'react';
import PropTypes from 'prop-types';
import WeatherCode from './WeatherCode';

const ForecastItem = (props) => {


    return (
        <li className="forecast-item">
            <p>{ props.label }</p>
            <WeatherCode code={ props.code } />
            <p className="forecast-item-temp">{ Math.round(props.temperature) }</p>
        </li>
    );

};

ForecastItem.propTypes = {
    label: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem;