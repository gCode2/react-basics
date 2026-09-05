export interface Creature{
    name: string,
    url: string
}
export interface CreatureApiResponse{
    count: number,
    results: Creature[]
}
export interface CreaturesListProps{
    creatures: Creature[]
}
export interface CreatureProps{
    creature: Creature
}