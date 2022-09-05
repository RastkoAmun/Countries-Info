const Search = (props) => {
  return (
    <div className="search">Find Countries: <input value={props.value} onChange={props.onChange}/></div>
  )
}

export default Search