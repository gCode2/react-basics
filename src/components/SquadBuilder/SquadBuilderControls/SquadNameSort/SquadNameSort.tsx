import type { SquadNameSortProps } from "../../../../types/SquadBuilder/types";

function SquadNameSort({sortHandler}: SquadNameSortProps){
    return (
        <>
            <div>
                <h2>
                        Sort entities by name
                </h2>
                <div className="squadNameSortChips">
                    
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
export default SquadNameSort;