import React from 'react';
import TemperatureDisplay from './components/TemperatureDisplay';
import WeatherCode from './components/WeatherCode';

const App = () => {



    return (
        <main className="weather-container">
            <div className="weather-container-content">
                <header className="weather-container-header">
                    <p className="location">La Rochelle</p>
                    <button className="refresh-button">
                        <img src="https://lpmiaw-react.napkid.dev/img/weather/refresh.png" alt="Refresh" />
                    </button>
                </header>
                <p className="date">10/20/2021</p>
                <article className="today">
                    <WeatherCode
                        code={ 51 }
                    />
                    <TemperatureDisplay
                        min={ 18 }
                        max={ 25 }
                        avg={ 22 }
                    />
                </article>
                <section className="hidden">
                    <nav className="tabs">
                        <button className="tab tab--active">
                            Journée
                        </button>
                        <button className="tab">
                            Semaine
                        </button>
                    </nav>
                    <ul className="forecast">
                        <li className="forecast-item">
                            <p>
                                20/10
                            </p>
                            <img src="https://lpmiaw-react.napkid.dev/img/weather/sunshine.png" alt="sunshine" className="weathercode-img" />
                            <p className="forecast-item-temp">
                                21
                            </p>
                        </li>
                        <li className="forecast-item">
                            <p>
                                21/10
                            </p>
                            <img src="https://lpmiaw-react.napkid.dev/img/weather/sunshine.png" alt="sunshine" className="weathercode-img" />
                            <p className="forecast-item-temp">
                                21
                            </p>
                        </li>
                        <li className="forecast-item">
                            <p>
                                22/10
                            </p>
                            <img src="https://lpmiaw-react.napkid.dev/img/weather/sunshine.png" alt="sunshine" className="weathercode-img" />
                            <p className="forecast-item-temp">
                                21
                            </p>
                        </li>
                        <li className="forecast-item">
                            <p>
                                23/10
                            </p>
                            <img src="https://lpmiaw-react.napkid.dev/img/weather/sunshine.png" alt="sunshine" className="weathercode-img" />
                            <p className="forecast-item-temp">
                                21
                            </p>
                        </li>
                    </ul>
                </section>
                <footer className="weather-container-footer">
                    <p>Mis à jour à 10:14:21</p>
                </footer>
            </div>
        </main>
    );

}

export default App;
