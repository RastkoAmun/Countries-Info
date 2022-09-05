const ShowCountry = ({country}) => {
  const languages = [];
  for(let key in country.languages){
    languages.push(country.languages[key])
  }
  const flag = country.flags.png;

  return(
    <div>
      <h2>{country.name.common}</h2>
      <div>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
      </div>
      <h4>Languages:</h4>
      <ul>
        {languages.map(lang => <li key={lang}> {lang} </li>)}
      </ul>
      <div>
        <img src={flag} width='150px'/>
      </div>
    </div>
  )
}

export default ShowCountry;