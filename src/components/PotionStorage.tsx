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
    const [selectedPotionType, setSelectedPotionType] = useState("all")
    // as the TS already know "" stands for a string, there's no need to type it
    const potionTypes = getPotionTypes();

    function handlePotionSearch(text: string){
        setSearchText(text);
    }
    
    function getPotionTypes(){
        return new Array("all", ...new Set(potions.map(potion=>potion.type)));
    }
    function handlePotionTypeChange(potionType: string){
        setSelectedPotionType(potionType);
    }
    function addPotion(potionData: NewPotionData){
       setPotions(prev=>([...prev, {id: Math.floor(Math.random()*1000+1), ...potionData}]));
    }
    function drinkPotion(potionToDrink: Potion){
        let hasPotion = true;
        const updatedPotions = potions.map(potion=>{
            if(potionToDrink.id !== potion.id){
                return potion;
            }
            const updatedPotion = {...potion, quantity: potion.quantity-1};
            if(updatedPotion.quantity <= 0){
                hasPotion = false;
            }
            return updatedPotion;
        })
        setPotions(updatedPotions)
        if(!hasPotion){
            discardPotion(potionToDrink);
        }
    }
    function discardPotion(potionToRemove: Potion){
        const newPotionList = potions.filter(potion => potion !== potionToRemove);
        setPotions(newPotionList);

    }
    return (
        <>
            <div className="app">
                <SearchBar searchText={searchText} potionSearchHandler={handlePotionSearch}/>
                <PotionTypeFilter potionTypes={potionTypes} potionTypeChangeHandler={handlePotionTypeChange}/>
                <PotionsList potions={searchText === "" ? potions : potions.filter(potion=>potion.name.includes(searchText))} selectedPotionType={selectedPotionType} drinkPotionHandler={drinkPotion} discardPotionHandler={discardPotion}/>
                <AddPotionForm addPotionHandler={addPotion}/>
            </div> 
        </>
    )
}
export default PotionStorage;