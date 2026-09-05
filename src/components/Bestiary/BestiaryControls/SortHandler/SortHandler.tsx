import type { SortHandlerProps } from "../../../../types/Bestiary/types"

function SortHandler({sortHandler}:SortHandlerProps){

    return (
        <>
            <div>
                <div>
                    Sort Creatures
                </div>
                <div className="creatureChips">
                    <div className="chip" onClick={()=>sortHandler("asc")}>
                        A-Z
                    </div>
                    <div className="chip" onClick={()=>sortHandler("desc")}>
                        Z-A
                    </div>
                </div>
            </div>
        </>
    )
}
export default SortHandler