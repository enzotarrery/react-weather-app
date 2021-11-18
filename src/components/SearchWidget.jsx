import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SearchWidget = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [town, setTown] = useState({
        fetched: false,
        data: null,
    });

    const getData = () => {
        fetch('https://geo.api.gouv.fr/communes?nom=' + inputValue + '&fields=centre,codesPostaux')
            .then(response => response.json())
            .then(response => setTown({
                fetched: true,
                data: response,
            }))
            .catch(err => console.log(err));
    }

    const clearData = () => {
        setTown({
            fetched: false,
            data: null,
        })
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleClick = () => {
        getData();
    }


    return (
        <div className="searchbar-container">
            <div className="searchbar-input-group">
                <input type="text"
                    className="searchbar-input"
                    placeholder="Rechercher..."
                    value={ inputValue }
                    onChange={ handleChange }
                />
                <button className="searchbar-button" onClick={ handleClick } >
                    <svg className="searchbar-button-logo" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
            { town.fetched && 
            <div className="searchbar-options">
                <ul>
                    { town.data.map((element, index) => 
                        <li 
                            key={ index } 
                            onClick={ () => {
                                props.onSelect({
                                    name: element.nom,
                                    latitude: element.centre.coordinates[0],
                                    longitude: element.centre.coordinates[1],
                                });
                                clearData();
                            } }
                        >
                            <button>{ `${ element.nom } (${ element.codesPostaux[0] })` }</button>
                        </li>
                        )
                    }
                </ul>
            </div> 
            }
            
        </div>
    );
}

SearchWidget.propTypes = {

}

export default SearchWidget;
