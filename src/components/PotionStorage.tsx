import AddPotionForm from "./PotionStorage/AddPotionForm/AddPotionForm";
import PotionTypeFilter from "./PotionStorage/PotionControls/PotionTypeFilter/PotionTypeFilter";
import SearchBar from "./PotionStorage/PotionControls/SearchBar/SearchBar";
import PotionsList from "./PotionStorage/PotionsList/PotionsList";
import type {Potion, PotionType} from "../types/PotionStorage/types"
import { useState } from "react";

const POTIONS_LIST: Potion[] = [{
    id: 0,
    name: "small health potion",
    type: "Health",
    quantity: 10,
    note: "known in the whole gaming industry"
}, {
    id: 1,
    name: "small mana potion",
    type: "Mana",
    quantity: 3,
    note: "small magic power regeneration"
}, {
    id: 2,
    name: "small strength potion",
    type: "Strength",
    quantity: 1,
    note: "consume to become just a little stronger"
}, {
    id: 3,
    name: "medium health potion",
    type: "Health",
    quantity: 5,
    note: "tastes good, also, heals wounds pretty well"
}]

function PotionStorage(){
    const [potions, setPotions] = useState<Potion[]>(POTIONS_LIST);
    const [searchText, setSearchText] = useState("");
    // as the TS already know "" stands for string, there's no need to type it

    function handlePotionSearch(text: string){
        setSearchText(text);
        console.log(text)
    }

    return (
        <>
            <SearchBar searchText={searchText} potionSearchHandler={handlePotionSearch}/>
            <PotionTypeFilter/>
            <PotionsList potions={searchText === "" ? potions : potions.filter(potion=>potion.name.includes(searchText))}/>
            <AddPotionForm/>
        </>
    )
}
export default PotionStorage;