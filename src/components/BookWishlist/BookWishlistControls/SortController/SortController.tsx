import type { SortControllerProps } from "../../../../types/BookWishlist/types";

function SortController({sortHandler}: SortControllerProps){
    return(
        <>
            <div>
                Sort:
            </div>
            <div className="bookChips">
                <div className="chip" onClick={()=>sortHandler("asc")}>
                    Asc
                </div>
                <div className="chip" onClick={()=>sortHandler("desc")}>
                    Desc
                </div>
            </div>
        </>
    )
}
export default SortController;