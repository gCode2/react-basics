import type { SearchBarProps } from "../../../../types/PotionStorage/types";

function SearchBar({searchText, potionSearchHandler}: SearchBarProps){

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        potionSearchHandler(e.target.value)
    }

    return (
        <>
            <input type="text" name="searchBar" value={searchText} className="searchBar" onChange={handleChange}/>
        </>
    )
}

export default SearchBar;