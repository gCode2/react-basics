import type { FilterControllerProps } from "../../../../types/BookWishlist/types";

function FilterController({bookStatuses, filterHandler}: FilterControllerProps){
    return(
        <>
            <div>
                            Filter:
            </div>
            <div className="bookChips">
                {bookStatuses.map(status=>(
                    <div key={status} className="chip" onClick={()=>filterHandler(status)}>
                        {status}
                    </div>
                ))}
            </div>
        </>
    )
}
export default FilterController;