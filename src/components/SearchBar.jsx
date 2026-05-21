import { useState } from 'react'


function SearchBar({ onSearch }) {
  
  const [ciudad, setCiudad] = useState('');

  function handleSearch() {
        // Llama a fetchWeather con la ciudad que escribió el usuario
        onSearch(ciudad)
      }


  return (
    <div>
      <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

export default SearchBar