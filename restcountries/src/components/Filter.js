import Display from "./Display"
import AboutCountry from "./AboutCountry"

const Filter = ({ newSearch, countries, setNewSearch, ApiKey }) => {

  const numcountries = countries.filter(country => country.name.common.toUpperCase().includes( newSearch.toUpperCase() ) )
  //
    if (numcountries.length > 10 && numcountries.length < 249 ) {
      return <p>Too many matches, specify antoher Filter</p>
    }
    else if (numcountries.length === 1) {
      return <AboutCountry country={numcountries[0]} ApiKey={ApiKey}/>
    } 
    return (
      countries.filter(country => country.name.common.toUpperCase().includes( newSearch.toUpperCase() ) )
      .map(country =>
        <div key={country.name.common}>
          <Display 
          country={country.name.common}/> 
          <button
          onClick={() => setNewSearch(country.name.common)}>show</button>
        </div>
        )
    )
}
export default Filter