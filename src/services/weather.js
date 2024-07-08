import axios from "axios";

const baseUrl = 'https://api.openweathermap.org'
const api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherInfo = (latitude, longitude) => {
    const apiRequest = axios.get(`${baseUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
/*     https://api.openweathermap.org/data/2.5/weather?q=${countryToDisplay.capital}&appid=${apiKey}&units=metric */
        return apiRequest.then(response => {
        console.log(`success - weather info for lat: ${latitude} & lon: ${longitude} retrieved`)
        return response.data
    })
    .catch(error => {
        console.log(error.message, 'error for getWeatherInfo')
    })
}

export default {
    getWeatherInfo
}