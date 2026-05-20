import SearchBar from './components/SearchBar'
import { useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import { getCoordinates } from './services/weatherService'

function App() {
  
  useEffect(() =>{
  getCoordinates('Córdoba').then(data => console.log(data))
}, [])

  return (
    <div>
      <SearchBar />
      <WeatherCard ciudad='cordoba' temperatura={25} tempMin={5} tempMax={20} estadoCielo='despejado' humedad='25%' viento='5km'/>
      
    </div>
  )
}

export default App
