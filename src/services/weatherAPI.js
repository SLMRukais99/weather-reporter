const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const fetchWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`);
  const data = await response.json();
  
  if (data.error) {
    throw new Error("City not found. Please try another city.");
  }
  
  return data;
};