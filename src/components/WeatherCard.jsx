function WeatherCard({ weather }) {
  const weatherDetails = [
    {
      icon: "bi-droplet",
      label: "Humidity",
      value: `${weather.current.humidity}%`
    },
    {
      icon: "bi-wind",
      label: "Wind Speed", 
      value: `${weather.current.wind_kph} km/h`
    },
    {
      icon: "bi-compass",
      label: "Wind Direction",
      value: `${weather.current.wind_dir} (${weather.current.wind_degree}°)`
    },
    {
      icon: "bi-eye",
      label: "Visibility",
      value: `${weather.current.vis_km} km`
    },
    {
      icon: "bi-cloud",
      label: "Cloud Cover",
      value: `${weather.current.cloud}%`
    },
    {
      icon: "bi-sun",
      label: "UV Index",
      value: weather.current.uv
    }
  ];

  return (
    <div className="fade-in">
      {/* Main Weather Card */}
      <div className="glass-card p-4 p-md-5 mb-4">
        <div className="text-center mb-4">
          <h2 className="h3 location-title mb-2">
            <i className="bi bi-geo-alt me-2"></i>
            {weather.location.name}, {weather.location.country}
          </h2>
          <p className="text-white-50 mb-0">
            <i className="bi bi-clock me-1"></i>
            Last updated: {weather.current.last_updated}
          </p>
        </div>

        <div className="row align-items-center justify-content-center mb-4">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            <img 
              src={`https:${weather.current.condition.icon}`}
              alt={weather.current.condition.text}
              className="weather-icon mb-3"
            />
            <p className="weather-condition-text mb-0">
              {weather.current.condition.text}
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div className="temperature mb-2">
              {weather.current.temp_c}°
            </div>
            <p className="text-white-50 h6">
              Feels like {weather.current.feelslike_c}°C
            </p>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="row g-3 mb-4">
        {weatherDetails.map((detail, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="weather-detail-card p-4 h-100">
              <div className="d-flex align-items-center mb-2">
                <i className={`bi ${detail.icon} detail-icon me-3`}></i>
                <span className="detail-label">{detail.label}</span>
              </div>
              <div className="detail-value">{detail.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="glass-card p-4">
        <h3 className="h5 text-white mb-4">
          <i className="bi bi-info-circle me-2"></i>Additional Information
        </h3>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="detail-label">
                <i className="bi bi-speedometer2 me-2"></i>Pressure
              </span>
              <span className="detail-value">{weather.current.pressure_mb} mb</span>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="detail-label">
                <i className="bi bi-brightness-high me-2"></i>Time of Day
              </span>
              <span className="detail-value">
                {weather.current.is_day === 1 ? "Day ☀️" : "Night 🌙"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;