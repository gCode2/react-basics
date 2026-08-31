function SearchBar({searchTextChangeHandler, searchText}){
    function handleChange(e){
        searchTextChangeHandler(e.target.value)
    }
    return (
        <>
        <input type="text" className="searchBar" value={searchText} onChange={handleChange}/>
        </>
    )
}
export default SearchBar