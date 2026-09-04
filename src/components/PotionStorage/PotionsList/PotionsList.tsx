import type { PotionsListProps } from "../../../types/PotionStorage/types";
import Potion from "./Potion/Potion";

function PotionsList({potions, selectedPotionType}: PotionsListProps){
    return (
        <>
            <div className="potionsListHolder">
                {potions.filter(potion=>potion.type === selectedPotionType || selectedPotionType === "all").map(potion=>(
                    <Potion key={potion.id} potion={potion}/>
                ))}
            </div>
        </>
    )
}

export default PotionsList;