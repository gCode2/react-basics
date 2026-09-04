import type { PotionTypeFilterProps } from "../../../../types/PotionStorage/types";

function PotionTypeFilter({potionTypes, potionTypeChangeHandler}:PotionTypeFilterProps){
    return (
        <>
        <div className="potionTypeChips">
            {potionTypes.map(potionType=>(
                <div key={potionType} className="chip" onClick={()=>{potionTypeChangeHandler(potionType)}}>
                    {potionType}
                </div>
            ))}
        </div>
        </>
    )
}

export default PotionTypeFilter;