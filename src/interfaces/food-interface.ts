export interface IIngredient {
    id: number,
    name: string
}
export interface IProduct {
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
    burgerList: [IProduct],
    catalogTitle: string,
    getBurgers: () => void
}
export interface IPizzaContent {
    pizzaList: [IProduct],
    catalogTitle: string,
    getPizza: () => void
}