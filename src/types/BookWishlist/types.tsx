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
    author: string[],
    title: string,
    year: number,
    coverId: number
}