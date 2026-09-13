import type { BookProps } from "../../../../types/BookWishlist/types";

function Book({book}: BookProps){
    console.log(book.cover_i)
    return(
        <>
            <div className="bookCard">
                <div className="imgHolder">
                    <img src={`${book.cover_i}`} alt="Book cover image" className="bookImage"/>
                </div>
                <div>
                    Title: {book.title}
                </div>
                <div>
                    Year: {book.year}
                </div>
                <div>
                    Author(s): {book.author}
                </div>
                
                         <div className="bookId">
                             #{book.id}
                         </div>
                
            </div>
        </>
    )
}
export default Book;

// <div className="entityCard">
            //     <div className="imgHolder">
            //         <img src={`${entity.image}`} className="entityImage"/>
            //         <div className="actionButtonHolder">
            //             <div className={`actionChip chip ${actionLabel}`} onClick={()=>actionHandler(entity.id)}>
            //                 {actionLabel}
            //             </div>
            //         </div>
            //     </div>
                
            //         <div>
            //             Name: {entity.name}
            //         </div>           
            //         <div>
            //             Gender: {entity.gender}
            //         </div>
            //         <div>
            //             Spiece: {entity.species}
            //         </div>           
            //         <div>
            //             Status: {entity.status}
            //         </div>
            //         <div className="entityHolder">
            //             <div className="entityId">
            //                 #{entity.id}
            //             </div>
            //         </div>
            // </div>