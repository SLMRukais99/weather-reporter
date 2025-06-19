# React + Vite

# 🌤️ Weather Reporter

A clean and simple weather application built with React (Vite) that allows users to search for current weather conditions in any city using the WeatherAPI.

## 🚀 Live Demo

👉 [weather-reporter-sand.vercel.app](https://weather-reporter-sand.vercel.app/)

---

## ✨ Features

- 🔍 **City Search**: Get weather by typing any city name
- 📍 **Initial Load**: Shows weather for Colombo by default
- 🌡️ **Weather Details**: Temperature, Humidity, Wind, UV Index, etc.
- 🌤️ **Condition Icons**: Displays icons based on live weather condition
- ⏱️ **Loading Indicator**: Spinner while fetching data
- 📛 **Error Handling**: Gracefully shows error if city is not found
- 📈 **Additional Data**: Includes feels-like temperature, visibility, cloud cover, pressure, wind direction, and more

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **API**: [WeatherAPI.com](https://www.weatherapi.com)
- **Styling**: CSS
- **Deployment**: Vercel

---

## 📦 Installation & Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/weather-reporter.git
cd weather-reporter

# 2. Install dependencies
npm install

# 3. Add your WeatherAPI key
touch .env

VITE_WEATHER_API_KEY=your_api_key_here

# 4. Start development server
npm run dev
