export type PotionType = "Health" | "Mana" | "Stamina" | "Strength" | "Agility"

export interface Potion{
    id: number,
    name: string,
    type: PotionType,
    quantity: number,
    note?: string
}

export interface PotionsListProps{
    potions: Potion[]
}
export interface PotionProps{
    potion: Potion
}