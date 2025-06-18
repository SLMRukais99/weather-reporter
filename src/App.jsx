import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorAlert from "./components/ErrorAlert";
import WelcomeMessage from "./components/WelcomeMessage";
import { fetchWeatherData } from "./services/weatherAPI";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("Colombo");
  const [error, setError] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const handleWeatherFetch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(null);
      setFirstLoad(false);
      updateBackground(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(err.message); // Show the actual error message from the API
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const updateBackground = (weatherData) => {
    if (!weatherData) return;

    const condition = weatherData.current.condition.text.toLowerCase();
    const isDay = weatherData.current.is_day === 1;
    const body = document.body;

    // Remove existing classes
    body.classList.remove('sunny', 'cloudy', 'night', 'rainy');

    if (!isDay) {
      body.classList.add('night');
    } else if (condition.includes('sun') || condition.includes('clear')) {
      body.classList.add('sunny');
    } else if (condition.includes('rain') || condition.includes('storm')) {
      body.classList.add('rainy');
    } else if (condition.includes('cloud')) {
      body.classList.add('cloudy');
    }
  };

  useEffect(() => {
    handleWeatherFetch(location);
    // eslint-disable-next-line
  }, []);

  const handleSearch = (city) => {
    setLocation(city);
    handleWeatherFetch(city);
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold location-title mb-3">
          <i className="bi bi-cloud-sun me-3"></i>Weather Reporter
        </h1>
        <p className="lead" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
          Get real-time weather updates for any city worldwide
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} loading={loading} />

      {/* Error Alert */}
      {error && <ErrorAlert message={error} />}

      {/* Loading Spinner */}
      {loading && <LoadingSpinner />}

      {/* Welcome Message */}
      {firstLoad && !loading && <WelcomeMessage />}

      {/* Weather Data */}
      {weather && !loading && !firstLoad && (
        <WeatherCard weather={weather} />
      )}
    </div>
  );
}

export default App;