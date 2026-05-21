function WeatherCard({
  city,
  temperature,
  minTemp,
  maxTemp,
  skyStatus,
  humidity,
  wind,
}) {
  return (
    <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg mt-6">
      {" "}
      {/* card completa */}
      <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-8 text-white">
        {" "}
        {/* header con gradiente */}
        <p className="text-sm opacity-80">{city}</p>
        <h1 className="text-7xl font-medium leading-none">{temperature}°</h1>
        <p className="text-base opacity-85">{skyStatus}</p>
        <p className="text-sm opacity-75 mt-2">
          Mín {minTemp}° · Máx {maxTemp}°
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-6 bg-white dark:bg-[#1C1C25]">
        {" "}
        {/* grid de humedad y viento */}
        <div className="bg-sky-50 dark:bg-[#25252F] rounded-2xl p-4 flex flex-col gap-1">
          <span className="text-xs text-sky-600 dark:text-white/50">
            Humedad
          </span>
          <span className="text-2xl font-medium text-sky-900 dark:text-white">
            {humidity}
          </span>
        </div>
        <div className="bg-sky-50 dark:bg-[#25252F] rounded-2xl p-4 flex flex-col gap-1">
          <span className="text-xs text-sky-600 dark:text-white/50">
            Viento
          </span>
          <span className="text-2xl font-medium text-sky-900 dark:text-white">
            {wind}
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
