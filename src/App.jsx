import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";
import { getWeatherDescription } from "./services/weatherService";
import SuggestedCities from "./components/SuggestedCities";

function App() {
  const { weather, loading, error, fetchWeather, cityName } = useWeather();
  console.log(weather);

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  return (
    <div className="min-h-screen bg-sky-100 dark:bg-[#0F0F13] flex flex-col items-center">
      <nav className="w-full px-6 py-4 flex justify-between items-center max-w-2xl mx-auto">
        <span className="text-sky-900 dark:text-white font-semibold text-lg font-bold">
          Cielo Hoy ☁️
        </span>
        <button
          onClick={toggleDarkMode}
          className={`w-13 h-7 rounded-full p-0.5 transition-colors duration-300 border ${darkMode ? "bg-indigo-600 border-indigo-600" : "bg-slate-200 border-slate-300"}`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow flex items-center justify-center text-xs transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`}
          >
            {darkMode ? "🌙" : "☀️"}
          </div>
        </button>
      </nav>
      <SearchBar onSearch={fetchWeather} />
      <SuggestedCities onSearch={fetchWeather}/>
      {loading && <p>Cargando...</p>}
      {weather && (
        <WeatherCard
          temperature={Math.round(weather.current.temperature_2m)}
          minTemp={Math.round(weather.daily.temperature_2m_min[0])}
          maxTemp={Math.round(weather.daily.temperature_2m_max[0])}
          humidity={`${weather.current.relative_humidity_2m}%`}
          wind={`${weather.current.wind_speed_10m} km/h`}
          // al dato de ciudad lo tengo guardado en el hook cuando hago la busqueda, en el parametro
          // city de fetchWeather
          city={cityName}
          skyStatus={getWeatherDescription(weather.current.weather_code)}
        />
      )}
    </div>
  );
}

export default App;
