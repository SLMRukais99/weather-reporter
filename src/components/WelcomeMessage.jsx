function WelcomeMessage() {
  return (
    <div className="glass-card rounded-4 p-5 text-center">
      <div className="mb-4" style={{fontSize: "4rem"}}>👋</div>
      <h2 className="h3 text-white mb-3">Welcome to Weather Reporter!</h2>
      <p className="text-white-50 mb-0">
        Use the search bar above to check weather in any city around the world.
      </p>
    </div>
  );
}

export default WelcomeMessage;