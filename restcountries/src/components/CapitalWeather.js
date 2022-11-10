import { useState, useEffect } from "react"
import axios from 'axios'

const CapitalWeather = ({capital, ApiKey}) => {

  const [weather, setWeather] = useState([])

    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${ApiKey}&units=Metric`)
        .then(response => {
          setWeather(response.data)
        })
        console.log('Axiooooos is running')
    }, [])

    if (weather.length===0){
      return<p>Cargando...</p>
    }
    return(
      <div>
        <h3>weather in {capital}</h3>
        <p>Temperature: {weather.main.temp} Celsius</p>
      </div>
    )
}
export default CapitalWeather