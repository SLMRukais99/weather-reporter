import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Fetch city suggestions (multiple)
  const fetchCitySuggestions = async (query) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data)) {
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    } catch {
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 2) {
      fetchCitySuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setInput(city.name);
    setSuggestions([]);
    onSearch(city.name);
  };


  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
      setInput("");
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="row justify-content-center mb-5">
      <div className="col-lg-8">
        <div className="search-container p-3" style={{ position: "relative", zIndex: 1000 }}>
          <div className="input-group">
            <span className="input-group-text bg-transparent border-0">
              <i className="bi bi-geo-alt text-white"></i>
            </span>
            <input 
              type="text" 
              className="form-control form-control-glass" 
              placeholder="Enter city name..."
              value={input}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              autoComplete="off"
            />
            <button 
              className="btn btn-search px-4" 
              onClick={handleSearch}
              disabled={loading}
            >
              <i className="bi bi-search me-2"></i>Search
            </button>
          </div>
          {/* Suggestions List - Plain Style */}
          {suggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "#fff",
                color: "#333",
                listStyle: "none",
                margin: 0,
                padding: 0,
                border: "1px solid #ddd",
                borderTop: "none",
                maxHeight: "200px",
                overflowY: "auto",
                zIndex: 9999,
                
              }}
            >
              {suggestions.map((city) => (
                <li
                  key={city.id || `${city.name},${city.region},${city.country}`}
                  onClick={() => handleSuggestionClick(city)}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                  onMouseDown={e => e.preventDefault()}
                >
                  <i className="bi bi-geo-alt me-2"></i>
                  {city.name}, {city.region}, {city.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;