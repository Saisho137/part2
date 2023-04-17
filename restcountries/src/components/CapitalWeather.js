import { useState, useEffect } from "react"
import axios from 'axios'

const CapitalWeather = ({ capital, ApiKey }) => {

  const [weather, setWeather] = useState([])

  const params = {
    access_key: ApiKey,
    query: 'Chicago'
  }

  useEffect(() => {
    axios.get('http://api.weatherstack.com/current', { params } )
      .then(response => {
        setWeather(response.data)
        console.log('Dentro del axios: ', response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  console.log(weather)

  if (weather.length === 0) {
    return <p>Cargando...</p>
  }

  return (
    <div>
      <h3>weather in {capital}</h3>
      {/* <p>Temperature: {weather.current.temperature} Celsius</p>
      <img src={weather.current.weather_icons} alt='100' width='100'></img>
      <p>Wind: {weather.current.wind_speed} km/h - direction to: {weather.current.wind_dir} </p> */}
    </div>
  )
}
export default CapitalWeather