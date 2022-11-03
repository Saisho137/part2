import { useState, useEffect } from "react"
import axios from 'axios'
import Filter from './components/Filter'

function App() {

  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
      console.log('Axios is running')
  }, [])

  return (
    <div>
      <h2>Find countries</h2>
      <input
          value={newSearch}
          onChange={handleSearchChange}
        />
      <Filter newSearch={newSearch} countries={countries} setNewSearch={setNewSearch} />
    </div>
  )

}

export default App
