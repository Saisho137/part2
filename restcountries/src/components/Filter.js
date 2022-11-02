import Display from "./Display"
import AboutCountry from "./AboutCountry"

const Filter = ({ newSearch, countries }) => {

  const numcountries = countries.filter(country => country.name.common.toUpperCase().includes( newSearch.toUpperCase() ) )
  //
    if (numcountries.length > 10 && numcountries.length < 249 ) {
      return <p>Too many matches, specify antoher Filter</p>
    }
    else if (numcountries.length === 1) {
      return <AboutCountry country={numcountries[0]}/>
    } 
    return (
      countries.filter(country => country.name.common.toUpperCase().includes( newSearch.toUpperCase() ) )
      .map(country =>
        <Display key={country.name.common}
          country={country.name.common}/>)
    )
}
export default Filter