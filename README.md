# Weather Reporter

A modern React + Vite app to get real-time weather updates for any city worldwide!  
This app uses the [WeatherAPI](https://www.weatherapi.com/) and features a sleek glassmorphism UI with Bootstrap 5.

## Features

- Search for weather by city name
- Real-time current weather data (temperature, humidity, wind, pressure, etc.)
- Dynamic background changes (sunny, cloudy, rainy, night) based on weather
- Responsive, mobile-friendly design
- Error handling for invalid city names
- Loading spinners and friendly messages



## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/YOUR_USERNAME/weather-reporter.git
cd weather-reporter
```

### 2. Install dependencies

```sh
npm install
```

### 3. Get your Weather API Key

- Go to [WeatherAPI](https://www.weatherapi.com/) and sign up for a free account.
- After registration, get your **API key** from the dashboard.

### 4. Set up your `.env` file

Create a file named `.env` in the project root and add:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual WeatherAPI key.

### 5. Run the app

```sh
npm run dev
```

The app will open in your browser at [http://localhost:5173](http://localhost:5173) (or as Vite indicates).

---

## Project Structure

```
src/
  components/
    ErrorAlert.jsx
    LoadingSpinner.jsx
    SearchBar.jsx
    WeatherCard.jsx
    WelcomeMessage.jsx
  services/
    weatherAPI.js
  App.jsx
  App.css
main.jsx
.env.example
README.md
```

## Customization

- UI is styled with [Bootstrap 5](https://getbootstrap.com/) and [Bootstrap Icons](https://icons.getbootstrap.com/)
- Weather backgrounds can be customized in `App.css`
- API logic is in `src/services/weatherAPI.js`



**Made with ❤️ using React, Vite, and WeatherAPI**
