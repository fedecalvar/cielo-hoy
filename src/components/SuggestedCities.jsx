
const CITIES = ['Buenos Aires', 'Londres', 'Tokyo', 'Nueva York', 'París', 'Río de Janeiro']

function SuggestedCities({ onSearch }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-md mt-3">
      {CITIES.map((city) => (
        <button key={city} onClick={() => onSearch(city)}
        className="px-4 py-1.5 rounded-full text-sm bg-white dark:bg-[#1C1C25] text-sky-900 dark:text-white shadow-sm hover:bg-indigo-100 dark:hover:bg-indigo-900 cursor-pointer transition-colors duration-200">
          {city}
        </button>
      ))}
    </div>
  )
}

export default SuggestedCities