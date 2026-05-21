import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { useWeather } from './hooks/useWeather'
import { getWeatherDescription } from './services/weatherService'

function App() {

  const {weather, loading, error, fetchWeather, cityName} = useWeather()
  console.log(weather)
  return (
    <div>
      <SearchBar onSearch={fetchWeather}/>
      {weather && (<WeatherCard
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
  )
}

export default App
