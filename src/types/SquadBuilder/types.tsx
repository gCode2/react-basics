// export interface SquadMember{

// }
export type EntityStatus = "Alive" | "Dead" | "unknown"
export type GenderType = "Male" | "Female" | "unknown"
export interface RawEntityDetails{
    created: Date,
    episode: string[],
    gender: GenderType,
    id: number,
    image: string,
    location: {
        name: string,
        url: string
    },
    name: string,
    origin: {
        name: string,
        url: string
    },
    species: string,
    //species moze byc tez zbiorem literałów - ale nie wiem tego, nie mam dostepu do pelnej bazy z tego endpointu - nie wiem czy human i alien to jedyne pola?
    status: EntityStatus,
    type: string,
    // type w niektórych entity jest pustym polem obiektu - '' - czy w zwiazku z tym moge zastosowac zapis "type?: string" czy raczej zostawić tak?
    url: string
}
export interface Entity{
    id: number,
    name: string,
    gender: GenderType,
    image: string,
    species: string,
    status: EntityStatus
}
export interface RawEntityApiResponse{
    info:{
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    },
    results: RawEntityDetails[]
}