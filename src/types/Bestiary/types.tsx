export type SortType = "asc" | "desc"
export interface Creature{
    name: string,
    url: string
}
export interface RawCreatureApiResponse{
    count: number,
    next: string | null,
    previous: string | null,
    results: Creature[]
}
export interface CreaturesListProps{
    creatures: Creature[]
}
export interface CreatureProps{
    creature: Creature
}
export interface SearchBarProps{
    searchText: string,
    searchHandler: (text: string) => void
}
export interface SortHandlerProps{
    sortHandler: (text: SortType) => void
}
