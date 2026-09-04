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
    selectedPotionType: string,
    drinkPotionHandler: (id: number) => void,
    discardPotionHandler: (id: number) => void
}
export interface PotionProps{
    potion: Potion,
    drinkPotionHandler: (id: number) => void,
    discardPotionHandler: (id: number) => void
}
export interface SearchBarProps{
    searchText: string,
    potionSearchHandler: (text: string) => void
}
export interface PotionTypeFilterProps{
    potionTypes: PotionType[],
    potionTypeChangeHandler: (potionType: PotionType | "all") => void
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