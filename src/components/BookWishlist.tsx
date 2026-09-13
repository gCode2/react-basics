import { useEffect, useState } from "react";
import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";
import type { Book, RawApiResponse } from "../types/BookWishlist/types";

const OPEN_LIBRARY_API = "https://openlibrary.org/search.json?q=Pinokio&limit=10"

function useFetchBooks(url: string){
    const [books, setBooks] = useState<Book[] | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    async function fetchBooks(url:string){
        try{
            setLoading(true);
            setError(null);

            const response = await fetch(url);
            if(!response.ok){
                throw new Error (`HTTP Error occured, status: ${response.status}`)
            }
            const data: RawApiResponse = await response.json();
            // setBooks(data.docs)

            const mappedBooks: Book[] = data.docs.map(book=>({
                id: crypto.randomUUID(),
                author: book.author_name,
                title: book.title,
                year: book.first_publish_year,
                coverId: book.cover_i
            }))
            setBooks(mappedBooks)

        }catch(error: unknown){
            if(error instanceof Error){
                setError(error.message);
            }else{
                setError("Unknown error occured")
            }
        }finally{
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        fetchBooks(url)
    },[])

    return {books, isLoading, error}
}

function BookWishlist(){
    
    const {books, isLoading, error} = useFetchBooks(OPEN_LIBRARY_API);
    



    return (
        <>
            <div>
                <SearchBooksForm/>
            </div>
            <div>
                {isLoading && <div>Loading...</div>}
                {error && <div className="error">{error}</div>}
                {!error && !isLoading && books && (
                    <BooksList books={books}/>
                )}
            </div>
        </>
    )
}
export default BookWishlist;