import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TemperatureDisplay from './TemperatureDisplay';
import WeatherCode from './WeatherCode';
import ForecastItem from './ForecastItem';
    
const WeatherWidget = (props) => {

    /* States */
    const [data, setData] = useState({
        fetched: false,
        daily: null,
        weekly: null,
        timestamp: new Date(Date.now()),
    });
    const [tab, setTab] = useState('daily');

    const getData = () => {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=' + props.latitude + '&longitude=' + props.longitude + '&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin')
            .then((response) => response.json())
            .then((response) => setData({
                fetched: true,
                daily: response.hourly,
                weekly: response.daily,
                timestamp: new Date(Date.now())
            }))
            .catch((err) => {console.log(err);});
    }

    /* Event handlers */
    const handleClick = () => {
        getData();
    }

    /* effects */
    useEffect(() => {
        /* fetching data */
        getData();

        /* setting refresh */
        const update = setInterval(getData, 10000);
        return () => clearInterval(update);
    }, [])


    return (
        <div className="weather-container-content">
                <header className="weather-container-header">
                    <p className="location">{ props.name }</p>
                    <button className="refresh-button" onClick={ handleClick }>
                        <img src="https://lpmiaw-react.napkid.dev/img/weather/refresh.png" alt="Refresh" />
                    </button>
                </header>
                <p className="date">{ data.timestamp.toLocaleDateString('fr') }</p>
                { (data.fetched && <article className="today">
                    <WeatherCode
                        code={ data.weekly.weathercode[0] }
                    />
                    <TemperatureDisplay
                        min={ data.weekly.temperature_2m_min[0] }
                        max={ data.weekly.temperature_2m_max[0] }
                        avg={ (data.weekly.temperature_2m_min[0] + data.weekly.temperature_2m_max[0]) / 2 }
                    />
                </article>) || <p>Chargement...</p>
                }
                {data.weekly && <section>
                    <nav className="tabs">
                        <button 
                            className={ `tab ${(tab === 'daily') ? "tab--active" : ""}` }
                            onClick={ () => setTab('daily') }
                        >
                            Journée
                        </button>
                        <button 
                            className={ `tab ${(tab === 'weekly') ? "tab--active" : ""}` }
                            onClick={ () => setTab('weekly') }
                        >
                            Semaine
                        </button>
                    </nav>
                    <ul className="forecast">
                        { tab === 'weekly' && Array(5).fill(null)
                            .map((i, index) => <ForecastItem
                                key={ index }
                                label={ new Date(data.weekly.time[index + 1]).toLocaleDateString('fr', { day: 'numeric', month: 'numeric' }) }
                                code={ data.weekly.weathercode[index + 1] }
                                temperature={ Math.round((data.weekly.temperature_2m_min[index + 1] + data.weekly.temperature_2m_max[index + 1]) / 2) }
                            />)
                        }
                        { tab === 'daily' && Array(5).fill(null)
                            .map((i, index) => <ForecastItem
                                key={ index }
                                label={ `${6 + (4 * index) /* fonction affine */}h` }
                                code={ data.daily.weathercode[6 + (4 * index)] }
                                temperature={ Math.round(data.daily.temperature_2m[6 + (4 * index)]) }
                            />)
                        }
                    </ul>
                </section>}
                <footer className="weather-container-footer">
                    <p>Mis à jour à { data.timestamp.toLocaleTimeString('fr') }</p>
                </footer>
            </div>
    );

}

WeatherWidget.propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}
    
export default WeatherWidget;
