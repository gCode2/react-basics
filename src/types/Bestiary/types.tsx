export interface Creature{
    name: string,
    url: string
}
export interface CreatureApiResponse{
    count: number,
    results: Creature[]
}
export interface RawCreatureApiResponse{
    count: number,
    next: string | null,
    previous: string | null,
    results: {
        name: string;
        url: string;
    }[]
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
    sortHandler: (text: string) => void
}
