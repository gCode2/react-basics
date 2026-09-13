import type { BooksListProps } from "../../../types/BookWishlist/types";
import Book from "./Book/Book";

function BooksList({books, onAddWishlist, onRemoveWishlist, wishlistedIds, readToggleHandler, readBooks}: BooksListProps){
    
    return(
        <>
            <div className="booksList">
                {
                    books.map(book=>(
                        <Book key={book.id} book={book} onAddWishlist={onAddWishlist} onRemoveWishlist={onRemoveWishlist} wishlistedIds={wishlistedIds} readToggleHandler={readToggleHandler} readBooks={readBooks}/>
                    ))
                }
            </div>
        </>
    )
}
export default BooksList;