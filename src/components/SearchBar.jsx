import { useState } from 'react'


function SearchBar({ onSearch }) {
  
  const [ciudad, setCiudad] = useState('');

  function handleSearch() {
        // Llama a fetchWeather con la ciudad que escribió el usuario
        onSearch(ciudad)
      }


  return (
    <div className='flex flex-col items-center justify-start pt-16  gap-4 w-full '>
      <div className='flex gap-4 w-full max-w-md'>
        <input className='flex-1 px-4 py-2 rounded-xl border border-sky-200 dark:border-white/10 bg-white dark:bg-[#1C1C25] text-sky-900 dark:text-white outline-none' type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
      <button className='px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 cursor-pointer transition-colors duration-200' onClick={handleSearch}>Buscar</button>
      </div>
      
    </div>
  )
}

export default SearchBar