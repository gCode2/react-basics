import type { SquadStatusFilterProps } from "../../../../types/SquadBuilder/types";

function SquadStatusFilter({entityStatuses, filterHandler} : SquadStatusFilterProps){
    return (
        <>
            <div>
                <div>
                    <h3>Filter entities status</h3>
                </div>
                <div className="squadNameFilterChips">
                    {
                        entityStatuses.map(status=>(
                            <div className="chip" key={status} onClick={()=>filterHandler(status)}>
                                {status}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default SquadStatusFilter;