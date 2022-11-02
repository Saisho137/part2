
const AboutCountry = ({country}) => {
    return (
        <div>
        <h1>{country.name.common}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <div>
        <h2>Languages</h2>
        {Object.values(country.languages).map((language) => (<li key={language}>{language}</li>))}
        </div>
        <br></br>
        <img src={country.flags.png} alt='' width='125px'></img>
      </div>
    )
}

export default AboutCountry