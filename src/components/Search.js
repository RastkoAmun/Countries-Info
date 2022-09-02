const Search = (props) => {
  return (
    <div>Find Countries: <input value={props.value} onChange={props.onChange}/></div>
  )
}

export default Search