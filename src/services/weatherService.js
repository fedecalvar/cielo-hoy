// Convertimos el nombre de una ciudad en coordenadas geograficas
export async function getCoordinates(city){
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es`)
  const data = await response.json()
  return data
}

// Obtenemos el clima actual usando latitud y longitud
export async function getWeather(lat, lon){
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
  const data = await response.json()
  return data
}


/*

  El weather_code es un número que Open-Meteo usa para representar el estado del cielo, por ejemplo:

    0 = Despejado
    1, 2, 3 = Parcialmente nublado
    45, 48 = Niebla
    61, 63, 65 = Lluvia
    71, 73, 75 = Nieve
    95 = Tormenta

  Entonces, creamos esta funcion que convierte ese numero a texto

*/
export function getWeatherDescription(code) {
  if (code === 0) return 'Despejado'
  if (code <= 3) return 'Parcialmente nublado'
  if (code <= 48) return 'Nublado'
  if (code <= 67) return 'Lluvia'
  if (code <= 77) return 'Nieve'
  if (code <= 99) return 'Tormenta'
  return 'Sin datos'
}