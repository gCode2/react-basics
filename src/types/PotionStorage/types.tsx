export type PotionType = "Health" | "Mana" | "Stamina" | "Strength" | "Agility"

export interface Potion{
    id: number,
    name: string,
    type: PotionType,
    quantity: number,
    note?: string
}

export interface PotionsListProps{
    potions: Potion[],
    selectedPotionType: string
}
export interface PotionProps{
    potion: Potion
}
export interface SearchBarProps{
    searchText: string,
    potionSearchHandler: (text: string) => void
}
export interface PotionTypeFilterProps{
    potionTypes: string[],
    potionTypeChangeHandler: (potionType: string) => void
}