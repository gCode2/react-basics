import type { SearchBarProps } from "../../../../types/SquadBuilder/types";

function SearchBar({searchText, changeHandler}: SearchBarProps){

    return (
        <>
            <input type="text" className="searchBar" placeholder="Search entities" value={searchText} onChange={(e)=>changeHandler(e.target.value)}/>
        </>
    )
}
export default SearchBar;