import { useState } from "react";
import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";
import type { Book, RawApiResponse } from "../types/BookWishlist/types";
import useFetch from "../hooks/useFetch";

const OPEN_LIBRARY_API = "https://openlibrary.org/search.json?q=&limit=10"



function BookWishlist(){
    const [url, setUrl] = useState(OPEN_LIBRARY_API);
    
    const {data, isLoading, error} = useFetch<RawApiResponse>(url);
    
    const books: Book[] = data ? data.docs.map(book=>({
        id: crypto.randomUUID(),
        author: book.author_name,
        title: book.title,
        year: book.first_publish_year,
        cover_i: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://img.magnific.com/free-vector/blue-text-book-library-icon_24877-83092.jpg"
    })) : [];

    function handleSubmit(searchText: string){
        if(searchText.trim()===""){
            return;
        }
        setUrl(`https://openlibrary.org/search.json?q=${searchText}&limit=10`)
    }

    return (
        <>
            <div>
                <SearchBooksForm submitHandler={handleSubmit}/>
            </div>
            <div>
                {isLoading && <div>Loading...</div>}
                {error && <div className="error">{error}</div>}
                {!error && !isLoading && data && (
                    <BooksList books={books}/>
                )}
            </div>
        </>
    )
}
export default BookWishlist;