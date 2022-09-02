const Display = ({countries}) => {
  if(countries.length > 10){
    return(
      <div> Too many mathces </div>
    )
  }
  else if(countries.length <= 10 && countries.length > 1){
    return(
      <div>
        {countries.map((country) => {
          return(
            <div key={country.cca3}> {country.name.common} </div>
          )
        })}
      </div>
    )
  }
  else if(countries.length === 1){
    const country = countries[0];
    console.log(country);

    const languages = [];
    for(let key in country.languages){
      languages.push(country.languages[key])
    }
    console.log(languages);

    const flag = country.flags.png;
    console.log(flag)

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
}

export default Display