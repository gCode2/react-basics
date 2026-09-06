export const ENTITY_STATUSES = ["Alive", "Dead", "unknown"] as const;
export type EntityStatus = typeof ENTITY_STATUSES[number];
export type GenderType = "Male" | "Female" | "unknown"
export type SortType = "asc" | "desc"
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
    status: EntityStatus,
    type: string,
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
export interface EntityListProps{
    entities: Entity[],
    actionLabel: string,
    actionHandler: (id: number) => void
}

export interface EntityCardProps{
    entity: Entity,
    actionLabel: string,
    actionHandler: (id: number) => void
}

export interface SearchBarProps{
    searchText: string,
    changeHandler: (text: string) => void
}

export interface SquadNameSortProps{
    sortHandler: (sortOrder: SortType) => void
}

export interface SquadStatusFilterProps{
    entityStatuses: readonly (EntityStatus | "all")[],
    filterHandler: (status: EntityStatus | "all") => void
}