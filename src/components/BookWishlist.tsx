import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";

function BookWishlist(){
    return (
        <>
            <div>
                <SearchBooksForm/>
            </div>
            <div>
                <BooksList/>
            </div>
        </>
    )
}
export default BookWishlist;