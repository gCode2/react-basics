import type { SearchBarProps } from "../../../../types/Bestiary/types";

function SearchBar({searchText, searchHandler}:SearchBarProps){

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        searchHandler(e.target.value);
    }

    return (
        <>
        <input type="text" className="searchBar" placeholder="search creatures!" value={searchText} onChange={handleChange}/>
        </>
    )
}
export default SearchBar;