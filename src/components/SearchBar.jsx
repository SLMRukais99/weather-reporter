import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
      setInput("");
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
        <div className="search-container p-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent border-0">
              <i className="bi bi-geo-alt text-white"></i>
            </span>
            <input 
              type="text" 
              className="form-control form-control-glass" 
              placeholder="Enter city name..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="btn btn-search px-4" 
              onClick={handleSearch}
              disabled={loading}
            >
              <i className="bi bi-search me-2"></i>Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;