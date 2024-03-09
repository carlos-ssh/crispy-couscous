import { useState, useEffect } from "react";

export const ApiTemperatureComponent = () => {
    const [selectedPlace, setSelectedPlace] = useState('' || 'Monterrey');
    const [Weather, setWeather] = useState([]);
    const [Lon, SetLon] = useState('');
    const [Lat, SetLat] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`https://search.reservamos.mx/api/v2/places?q=${selectedPlace}`);
        const dataResponse = await response.json();
        const lat = dataResponse[0].lat;
        const lon = dataResponse[0].long;
        SetLat(lat);
        SetLon(lon);
    };

    handleSubmit();

    const handleInputChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    const weatherRequest = async() => {
        const API_KEY = '0eebd1fcf852d29ca0340c5c451d4c9a'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&appid=${API_KEY}&units=metric`);
        const dataResponse = await response.json();
        setWeather(dataResponse);
        console.log('Data ===>', dataResponse);
    };


    console.log("Weather ====>", Weather);
    // <div>
    //     {!Weather ?
    //         <div>
    //             Selecciona una ciudad
    //         </div>
    //     :
    //         <div>
    //             {/* <h2>{Weather.city.name}</h2>
    //             <h2>{Weather.city.country}</h2>
    //             <h2>{Weather.list[0].main.temp}°C</h2>
    //             <h2>{Weather.list[0].weather[0].description}</h2> */}
    //         </div>
    //     }
    // </div>

    const data = {
        "id": 19,
        "slug": "monterrey", "city_slug": "monterrey", "display": "Monterrey", "ascii_display": "monterrey", "city_name": "Monterrey", "city_ascii_name": "monterrey", "state": "Nuevo León", "country": "México",
        "lat": "25.6866142",
        "long": "-100.3161126",
        "result_type": "city", "popularity": "0.365111433802639", "sort_criteria": 0.7460445735210556
    },

    weatherRequest();

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for a place..."
                    onChange={handleInputChange}
                    name="city"
                    value={selectedPlace}
                />
                <button
                    type="submit"
                >Search</button>
            </form>
        </div>
    );
};
