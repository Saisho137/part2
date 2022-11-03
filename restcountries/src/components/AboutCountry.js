
const AboutCountry = ({country}) => {
    return (
        <div>
        <h1>{country.name.common}</h1>
        <h3>capital: {country.capital}</h3>
        <h3>area: {country.area}</h3>
        <div>
        <h2>Languages</h2>
        <ul>
        {Object.values(country.languages).map((language) => (<li key={language}>{language}</li>))}
        </ul>
        </div>
        <img src={country.flags.png} alt='' width='125px'></img>
      </div>
    )
}

export default AboutCountry