export const data = [
    { id: 1, cat: 'Brot', name: 'Knäckebrot', harn: 64 },
    { id: 2, cat: 'Brot', name: 'Leinsamenbrot', harn: 52 },
]

export type TableFoodType =  {
    key: number,
    cat: string,
    name: string
    harn: number,
    amount: number
}

export type FoodType = {
    id: number,
    cat: string,
    name: string
    harn: number
}