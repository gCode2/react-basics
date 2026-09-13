import { useState } from "react";
import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";
import type { Book, RawApiResponse } from "../types/BookWishlist/types";
import useFetch from "../hooks/useFetch";

function BookWishlist(){
    const [url, setUrl] = useState<string | null>(null);
    
    const {data, isLoading, error} = useFetch<RawApiResponse>(url);
    
    const books: Book[] = data ? data.docs.map(book=>({
        id: book.key,
        author: book.author_name.join(", "),
        title: book.title,
        year: book.first_publish_year,
        coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://img.magnific.com/free-vector/blue-text-book-library-icon_24877-83092.jpg"
    })) : [];

    function handleSubmit(searchText: string){
        if(searchText.trim()===""){
            return;
        }
        setUrl(`https://openlibrary.org/search.json?q=${searchText}&limit=10`)
    }

    return (
        <>
            <div className="app">
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
            </div>
        </>
    )
}
export default BookWishlist;