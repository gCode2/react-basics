import type { BookProps } from "../../../../types/BookWishlist/types";

function Book({book}: BookProps){
    return(
        <>
            <div>
                {book.title}
                {book.year}
                {book.author}
            </div>
        </>
    )
}
export default Book;