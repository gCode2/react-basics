import { useEffect, useState } from "react";
import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";
import type { Book, RawApiResponse } from "../types/BookWishlist/types";
import useFetch from "../hooks/useFetch";

const OPEN_LIBRARY_API = "https://openlibrary.org/search.json?q=Pinokio&limit=10"



function BookWishlist(){
    
    const {data, isLoading, error} = useFetch<RawApiResponse>(OPEN_LIBRARY_API);
    
    const books: Book[] = data ? data.docs.map(book=>({
        id: crypto.randomUUID(),
        author: book.author_name,
        title: book.title,
        year: book.first_publish_year,
        coverId: book.cover_i
    })) : [];


    return (
        <>
            <div>
                <SearchBooksForm/>
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