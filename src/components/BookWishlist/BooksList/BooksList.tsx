import type { BooksListProps } from "../../../types/BookWishlist/types";
import Book from "./Book/Book";

function BooksList({books}: BooksListProps){
    return(
        <>
            <div className="booksList">
                {
                    books.map(book=>(
                        <Book key={book.id} book={book}/>
                    ))
                }
            </div>
        </>
    )
}
export default BooksList;