import { useState } from "react"

function SearchBar({searchNoteHandler}){
    const [searchText, setSearchText] = useState("")
    function handleNotesSearch(e){
        setSearchText(e.target.value);
        searchNoteHandler(e.target.value);
    }
    return (
        <>
            <input type="text" className="searchBar" value={searchText} onChange={(e)=>handleNotesSearch(e)}/>
        </>
    )
}

export default SearchBar