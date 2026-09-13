import type { BookProps } from "../../../../types/BookWishlist/types";

function Book({book}: BookProps){
    return(
        <>
            <div className="bookCard">
                <div className="imgHolder">
                    <img src={`${book.coverUrl}`} alt="Book cover image" className="bookImage"/>
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