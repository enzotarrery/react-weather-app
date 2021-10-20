import React from 'react';

const TemperatureDisplay = (props) => {



    return (
        <div className="temperature-display">
            <p className="temperature-display-avg">{ props.avg }</p>
            <div className="temperature-display-row">
                <p>{ props.max }</p>
                <p className="temperature-display-row-item--min">{ props.min }</p>
            </div>
        </div>
    );

}

export default TemperatureDisplay;
