import { useState } from 'react'
import { getCoordinates, getWeather } from '../services/weatherService'

export function useWeather() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [cityName, setCityName] = useState('')

  async function fetchWeather(city) {
    if (!city) return
    setLoading(true)
    const data = await getCoordinates(city)
    const lat = data.results[0].latitude
    const lon = data.results[0].longitude
    const result = await getWeather(lat, lon)
    setCityName(city)
    setWeather(result)
    setLoading(false)
  }

  return { weather, loading, error, fetchWeather, cityName }
}

