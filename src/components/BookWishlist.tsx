import { useReducer, useState } from "react";
import BooksList from "./BookWishlist/BooksList/BooksList";
import SearchBooksForm from "./BookWishlist/SearchBooksForm/SearchBooksForm";
import { FILTER_TYPES, type Book, type BookWishlistActions, type BookWishlistState, type FilterStatus, type RawApiResponse, type SortType } from "../types/BookWishlist/types";
import useFetch from "../hooks/useFetch";
import FilterController from "./BookWishlist/BookWishlistControls/FilterController/FilterController";
import SortController from "./BookWishlist/BookWishlistControls/SortController/SortController";

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
        return state.wishlistedBooks.map(b=>b.id);
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
            case "READ_TOGGLE":{
                if(state.readBookIds.some(b=>b===action.id)){
                    return {...state, readBookIds: state.readBookIds.filter(b=>b!==action.id)}
                }else{
                    return{...state, readBookIds: [...state.readBookIds, action.id]}
                }
            }
            case "SET_FILTER":{
                return {...state, selectedBookStatus: action.filterStatus}
            }
            case "SET_SORT":{
                switch(action.order){
                    case "asc":{

                        return {
                            ...state,
                            wishlistedBooks: state.wishlistedBooks.sort((a: Book,b: Book)=>{
                                return a.author.localeCompare(b.author);
                            })
                        }

                    }
                    case "desc":{

                        return {
                            ...state,
                            wishlistedBooks: state.wishlistedBooks.sort((a: Book,b: Book)=>{
                                return b.author.localeCompare(a.author);
                            })
                        }

                    }
                    default: 
                        throw Error ("Unknown sort order")
                }
                
            }
            default:
                throw new Error ("Unknown action!");
        }
    }

    function handleReadToggle(id: string){
        dispatch({
            type:"READ_TOGGLE",
            id: id
        })
    }

    const [state, dispatch] = useReducer(bookReducer, {wishlistedBooks: [], readBookIds: [], selectedBookStatus: "all", sortOrder: null});

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

    const bookStatuses = ["all", ...FILTER_TYPES] as const;
    
    function handleFilterChange(filterStatus: FilterStatus | "all"){
        dispatch({
            type: "SET_FILTER",
            filterStatus: filterStatus
        })
    }
    function handleSort(sortType: SortType | null){
        dispatch({
            type: "SET_SORT",
            order: sortType
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
                        <BooksList books={books} onAddWishlist={handleBookWishlist} onRemoveWishlist={handleBookWishlistRemove} wishlistedIds={getWishlistedBooks()} readToggleHandler={handleReadToggle} readBooks={state.readBookIds}/>
                    )}
                </div>
                <div>
                        <FilterController bookStatuses={bookStatuses} filterHandler={handleFilterChange}/>
                    </div>
                    <div>
                        <SortController sortHandler={handleSort}/>
                    </div>
                <div>
                    <div><h3>Wishlisted books:</h3></div>
                    
                    <div>
                        <BooksList books={state.wishlistedBooks.filter(book=>{
                            const isRead = state.readBookIds.includes(book.id);
                            const matchesStatus = 
                            state.selectedBookStatus === "all" || 
                            (state.selectedBookStatus==="read" && isRead) || 
                            (state.selectedBookStatus==="unread" && !isRead)

                            return matchesStatus
                        })} 
                        
                        
                        onAddWishlist={handleBookWishlist} onRemoveWishlist={handleBookWishlistRemove} wishlistedIds={getWishlistedBooks()} readToggleHandler={handleReadToggle} readBooks={state.readBookIds}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookWishlist;