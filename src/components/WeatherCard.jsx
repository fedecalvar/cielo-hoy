
function WeatherCard({ciudad, temperatura, tempMin, tempMax, estadoCielo, humedad, viento}) {
  return (
    <div>
      <h2>{ciudad}</h2>
      <p>{temperatura}</p>
      <p>{tempMin}-{tempMax}</p>
      <p>{estadoCielo}</p>
      <p>{humedad}</p>
      <p>{viento}</p>
    </div>
  )
}

export default WeatherCard