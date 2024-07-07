import axios from "axios";

const baseUrl = 'https://api.openweathermap.org'
const api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherInfo = (latitude, longitude) => {
    const apiRequest = axios.get(`${baseUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`)
    return apiRequest.then(response => {
        console.log(`Server - SUCCESS: got weather info 
            for lat: ${latitude} & lon: ${longitude}`)
        return response.data
    })
    .catch(error => {
        console.log(error.message, 'error for getWeatherInfo')
    })
}

export default {
    getWeatherInfo
}