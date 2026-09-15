import type { SortControllerProps } from "../../../../types/BookWishlist/types";

function SortController({sortOrderHandler, sortFieldHandler}: SortControllerProps){
    return(
        <>
            <div>
                Sort: <button onClick={()=>sortFieldHandler("author")}>author</button> <button onClick={()=>sortFieldHandler("year")}>year</button>
            </div>
            <div className="bookChips">
                <div className="chip" onClick={()=>sortOrderHandler("asc")}>
                    Asc
                </div>
                <div className="chip" onClick={()=>sortOrderHandler("desc")}>
                    Desc
                </div>
            </div>
        </>
    )
}
export default SortController;