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
export interface AddPotionFormProps{
    addPotionHandler: (potionData: NewPotionData) => void
}
export interface NewPotionData{
    name: string,
    type: PotionType,
    quantity: number,
    note?: string
}
export interface AddPotionFormErrors{
    name: string,
    type: string,
    quantity: string,
    note?: string
}
//this interface isnt needed, right?