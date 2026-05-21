
function WeatherCard({city, temperature, minTemp, maxTemp, skyStatus, humidity, wind}) {
  return (
    <div>
      <h2>{city}</h2>
      <p>{temperature}</p>
      <p>{minTemp}-{maxTemp}</p>
      <p>{skyStatus}</p>
      <p>{humidity}</p>
      <p>{wind}</p>
    </div>
  )
}

export default WeatherCard