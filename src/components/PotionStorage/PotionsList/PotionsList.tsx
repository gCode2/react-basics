import type { PotionsListProps } from "../../../types/PotionStorage/types";
import Potion from "./Potion/Potion";

function PotionsList({potions}: PotionsListProps){
    return (
        <>
            <div className="potionsListHolder">
                {potions.map(potion=>(
                    <Potion key={potion.id} potion={potion}/>
                ))}
            </div>
        </>
    )
}

export default PotionsList;