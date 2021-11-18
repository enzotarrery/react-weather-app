import React from 'react';
import PropTypes from 'prop-types';

const TemperatureDisplay = (props) => {



    return (
        <div className="temperature-display">
            <p className="temperature-display-avg">{ Math.round(props.avg) }</p>
            <div className="temperature-display-row">
                <p>{ Math.round(props.max) }</p>
                <p className="temperature-display-row-item--min">{ Math.round(props.min) }</p>
            </div>
        </div>
    );

}

TemperatureDisplay.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    avg: PropTypes.number.isRequired,
}

export default TemperatureDisplay;
