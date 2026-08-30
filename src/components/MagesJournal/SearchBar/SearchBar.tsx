function SearchBar({searchNoteHandler, searchText}){

    function handleNotesSearch(e){
        searchNoteHandler(e.target.value);

    }

    return (
        <>
            <input type="text" className="searchBar" value={searchText} onChange={handleNotesSearch}/>
        </>
    )
}

export default SearchBar