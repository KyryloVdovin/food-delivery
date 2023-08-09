export interface IIngredient {
    id: number,
    name: string
}
export interface IBurger {
    id: number,
    name: string,
    img: string,
    desc: string,
    ingredients: [IIngredient],
    price: number,
    veg: boolean,
    weight: number,
    unit: string
}