import AddPotionForm from "./PotionStorage/AddPotionForm/AddPotionForm";
import PotionTypeFilter from "./PotionStorage/PotionControls/PotionTypeFilter/PotionTypeFilter";
import SearchBar from "./PotionStorage/PotionControls/SearchBar/SearchBar";
import PotionsList from "./PotionStorage/PotionsList/PotionsList";
import type {NewPotionData, Potion, PotionType} from "../types/PotionStorage/types"
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
    const [selectedPotionType, setSelectedPotionType] = useState<PotionType | "all">("all")
    // as the TS already know "" stands for a string, there's no need to type it
    const potionTypes = getPotionTypes() as (PotionType | "all")[];
    const allPotionTypes = ["Health", "Mana", "Stamina", "Strength", "Agility"] as PotionType[]

    function handlePotionSearch(text: string){
        setSearchText(text);
    }
    
    function getPotionTypes(){
        return new Array("all", ...new Set(potions.map(potion=>potion.type)));
    }
    function handlePotionTypeChange(potionType: PotionType | "all"){
        setSelectedPotionType(potionType);
    }
    function addPotion(potionData: NewPotionData){
       setPotions(prev=>([...prev, {id: Math.floor(Math.random()*1000+1), ...potionData}]));
    }
    function drinkPotion(id: number){
        setPotions(prev=>prev.map(p=>p.id === id ? {...p, quantity: p.quantity-1} : p).filter(p=>p.quantity>0))
    }
    function discardPotion(id: number){
        setPotions(prev=>(prev.filter(potion => potion.id !== id)));
    }
    return (
        <>
            <div className="app">
                <SearchBar searchText={searchText} potionSearchHandler={handlePotionSearch}/>
                <PotionTypeFilter potionTypes={potionTypes} potionTypeChangeHandler={handlePotionTypeChange}/>
                <PotionsList potions={searchText === "" ? potions : potions.filter(potion=>potion.name.includes(searchText))} selectedPotionType={selectedPotionType} drinkPotionHandler={drinkPotion} discardPotionHandler={discardPotion}/>
                <AddPotionForm addPotionHandler={addPotion} potionTypes={allPotionTypes}/>
            </div> 
        </>
    )
}
export default PotionStorage;