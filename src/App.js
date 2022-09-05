import axios from 'axios'
import Search from './components/Search'
import { useState } from 'react'
import { useEffect } from 'react'
import Display from './components/Display'

function App() {
  const [countries, setCountries] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })    
  }, [])

  const searchedCountries = countries.filter((country) => country.name.common.toLowerCase().includes(input.toLowerCase()))


  const handleInput = (event) => {
    setInput(event.target.value);
  }

  return (
    <div>
      <Search value={input} onChange={handleInput}/>
      <Display countries={searchedCountries} />
    </div>
  );
}

export default App;
