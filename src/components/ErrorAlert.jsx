function ErrorAlert({ message }) {
  return (
    <div className="alert alert-danger rounded-4 text-center mb-4" style={{
      background: "rgba(220, 53, 69, 0.2)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(220, 53, 69, 0.4)",
      color: "white"
    }}>
      <i className="bi bi-exclamation-triangle me-2"></i>
      {message}
    </div>
  );
}

export default ErrorAlert;