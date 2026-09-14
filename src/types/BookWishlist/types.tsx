export interface RawBookDetails{
    author_key: string[],
    author_name: string[],
    cover_edition_key: string,
    cover_i: number,
    ebook_access: string,
    edition_count: number,
    first_publish_year: number,
    has_fulltext: boolean,
    ia: string[],
    ia_collection: string[],
    key: string,
    language: string[],
    lending_edition_s: string,
    lending_identifier_s: string,
    public_scan_b: boolean,
    title: string
}

export interface RawApiResponse{
    docs: RawBookDetails[],
    documentation_url: string,
    numFound: number,
    numFoundExact: boolean,
    num_found: number,
    offset: null,
    q: string,
    start: number
}

export interface Book{
    id: string,
    author: string,
    title: string,
    year?: number,
    coverUrl?: string
}

export interface BooksListProps{
    books: Book[],
    onAddWishlist: (book: Book) => void,
    onRemoveWishlist: (id: string) => void,
    wishlistedIds: string[],
    readToggleHandler: (id:string) => void,
    readBooks: string[]
}

export interface BookProps{
    book: Book,
    onAddWishlist: (book: Book) => void,
    onRemoveWishlist: (id: string) => void,
    wishlistedIds: string[],
    readToggleHandler: (id:string) => void,
    readBooks: string[]
}

export interface SearchBooksFormProps{
    submitHandler: (searchText: string) => void
}

export interface BookWishlistState{
    wishlistedBooks: Book[],
    readBookIds: string[],
    selectedBookStatus: FilterStatus | "all",
}

export type BookWishlistActions = | {
    type: "WISHLIST_ADD",
    book: Book
} | {
    type: "WISHLIST_REMOVE",
    id: string
} | {
    type: "READ_TOGGLE",
    id: string
} | {
    type: "SET_FILTER",
    filterStatus: FilterStatus | "all"
}

export const FILTER_TYPES = ["read", "unread"] as const;
export type FilterStatus = typeof FILTER_TYPES[number];

export interface FilterControllerProps{
    bookStatuses: readonly (FilterStatus | "all")[],
    filterHandler: (filterStatus: FilterStatus | "all") => void
}