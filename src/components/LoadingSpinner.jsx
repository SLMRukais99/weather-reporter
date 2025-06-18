function LoadingSpinner() {
  return (
    <div className="text-center mb-5">
      <div className="glass-card p-5">
        <div className="spinner-border text-white mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-white mb-0">Fetching weather data...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;