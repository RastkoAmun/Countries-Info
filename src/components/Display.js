import ShowCountry from "./ShowCountry"
import { useState } from "react"

const Display = ({countries}) => {
  const [ showed, setShowed ] = useState(true);
  const [ specificCountry, setSpecificCountry ] = useState({})

  const show = (event) => {
    if(event.target.value === specificCountry){
      setShowed(!showed)
    }else{
      setShowed(true)
    }  
    setSpecificCountry(event.target.value)
  }

  if(countries.length > 10){
    return(
      <div> Too many mathces </div>
    )
  }
  else if(countries.length <= 10 && countries.length > 1){
    return(
      <div className='countries'>
        {countries.map((country) => {
          return(
            <div key={country.cca3}>
              {specificCountry === country.cca3 && showed
                ? 
                <div> {country.name.common}    
                  <button value={country.cca3} onClick={show}> hide </button>
                  <ShowCountry country={country} />
                </div> 
                : 
                <div> {country.name.common}    
                  <button value={country.cca3} onClick={show}> show </button>
                </div>
                }
            </div>
          )})}
      </div>
    )
  }
  else if(countries.length === 1){
    return(<ShowCountry country={countries[0]} />)
  }
}

export default Display