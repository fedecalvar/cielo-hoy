export async function getCoordinates(city){
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es`)
  const data = await response.json()
  return data
}

export async function getWeather(lat, lon){
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
  const data = await response.json()
  return data
}