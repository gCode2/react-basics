import { useReducer, useState } from "react";
import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";
import type { Book, BookWishlistActions, BookWishlistState, RawApiResponse } from "../types/BookWishlist/types";
import useFetch from "../hooks/useFetch";

function BookWishlist(){
    const [url, setUrl] = useState<string | null>(null);
    const {data, isLoading, error} = useFetch<RawApiResponse>(url);
    const books: Book[] = data ? data.docs.map(book=>({
        id: book.key,
        author: book.author_name?.join(", ") ?? "Unknown author",
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

    function getWishlistedBooks(): string[]{
        return [...new Set(state.wishlistedBooks.map(b=>b.id))];
    }

    function bookReducer(state: BookWishlistState, action: BookWishlistActions): BookWishlistState{
        switch(action.type){
            case "WISHLIST_ADD":{
                if(state.wishlistedBooks.some(b=>b.id === action.book.id)){
                    return state;
                }else {
                    return {...state, wishlistedBooks: [...state.wishlistedBooks, action.book]}
                }
            }
            case "WISHLIST_REMOVE":{
                return{
                    ...state,
                    wishlistedBooks: state.wishlistedBooks.filter(b=>b.id !== action.id)
                }
            }
            default:
                throw new Error ("Unknown action!");
        }
    }

    const [state, dispatch] = useReducer(bookReducer, {wishlistedBooks: []});

    function handleBookWishlist(book: Book){
        dispatch({
            type:"WISHLIST_ADD",
            book
        })
    }
    function handleBookWishlistRemove(id: string){
        dispatch({
            type:"WISHLIST_REMOVE",
            id: id
        })
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
                        <BooksList books={books} onAddWishlist={handleBookWishlist} onRemoveWishlist={handleBookWishlistRemove} wishlistedIds={getWishlistedBooks()}/>
                    )}
                </div>
                <div>
                    <div><h3>Wishlisted books:</h3></div>
                    <div>
                        <BooksList books={state.wishlistedBooks} onAddWishlist={handleBookWishlist} onRemoveWishlist={handleBookWishlistRemove} wishlistedIds={getWishlistedBooks()}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookWishlist;