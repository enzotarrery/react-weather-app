import React, { useState } from 'react';
import WeatherWidget from './components/WeatherWidget';
import SearchWidget from './components/SearchWidget';

const App = () => {

    const [city, setCity] = useState({
        name: 'La Rochelle',
        latitude: -1.171,
        longitude: 46.1592,
    });

    return (
        <main className="weather-container">
            <SearchWidget 
                onSelect={ city => setCity(city) } 
            />
            <WeatherWidget 
                name={ city.name }
                latitude={ city.latitude }
                longitude={ city.longitude }
            />
        </main>
    );

}

export default App;
