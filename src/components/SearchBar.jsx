import { useState } from 'react'


function SearchBar() {
  
  const [ciudad, setCiudad] = useState('');

  function handleSearch() {
        console.log(ciudad)
      }


  return (
    <div>
      <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      
    </div>
  )
}

export default SearchBar