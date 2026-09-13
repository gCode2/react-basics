import type { BooksListProps } from "../../../types/BookWishlist/types";
import Book from "./Book/Book";

function BooksList({books}: BooksListProps){
    return(
        <>
            {
                books.map(book=>(
                    <Book key={book.id} book={book}/>
                ))
            }
        </>
    )
}
export default BooksList;