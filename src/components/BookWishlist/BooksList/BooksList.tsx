import type { BooksListProps } from "../../../types/BookWishlist/types";
import Book from "./Book/Book";

function BooksList({books, onAddWishlist, onRemoveWishlist, wishlistedIds}: BooksListProps){
    return(
        <>
            <div className="booksList">
                {
                    books.map(book=>(
                        <Book key={book.id} book={book} onAddWishlist={onAddWishlist} onRemoveWishlist={onRemoveWishlist} wishlistedIds={wishlistedIds}/>
                    ))
                }
            </div>
        </>
    )
}
export default BooksList;