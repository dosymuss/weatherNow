import axios from "axios"

const API_KEY = process.env.REACT_APP_TOMORROW_API_KEY

export const getWeather = async()=>{
    if (!API_KEY) {
        throw new Error("Missing REACT_APP_TOMORROW_API_KEY environment variable")
    }

    return axios.get("https://api.tomorrow.io/v4/weather/forecast", {
        params: {
            location: "42.3478,-71.0466",
            apikey: API_KEY,
        },
    })
}