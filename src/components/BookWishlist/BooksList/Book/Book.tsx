import type { BookProps } from "../../../../types/BookWishlist/types";

function Book({book, onAddWishlist, onRemoveWishlist, wishlistedIds, readToggleHandler, readBooks}: BookProps){
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
                <div>
                    {wishlistedIds.some(b=>book.id === b) ? 
                    <button onClick={()=>onRemoveWishlist(book.id)}>
                        Remove from a Wishlist!
                    </button> : 
                    <button onClick={()=>onAddWishlist(book)}>
                        Add to a Wishlist!
                    </button>}
                </div>
                <div className="bookId">
                    #{book.id}
                </div>
                {wishlistedIds.some(b=>book.id === b) ? 
                <div className="entityHolder">
                        <div className="wishlisted">
                            Wishlisted
                        </div>
                </div>: ""}
                
                <div className="readToggleHolder">
                        <div className="readToggleButton">
                            <button className="readButton" onClick={()=>readToggleHandler(book.id)}>
                                {readBooks.some(b=>book.id===b) ? "Remove from read" : "Mark as read"}
                            </button>
                            
                        </div>
                </div>
            </div>
        </>
    )
}
export default Book;