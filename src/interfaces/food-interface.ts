export interface IIngredient {
    id: number,
    name: string
}
export interface IBurger {
    id: number,
    name: string,
    img: string,
    price: number,
    weight: number,
    unit: string
}
export interface IProductDetails {
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

export interface IBurgerContent {
    burgerList: [IBurger],
    catalogTitle: string
}