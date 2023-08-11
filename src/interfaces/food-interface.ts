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
    unit: string,
    catalogTitle: string,
    getProduct: (id: number) => void
}

export interface IProductDetails {
    id: number,
    name: string,
    img: string,
    desc: string,
    ingredients: IIngredient[],
    price: number,
    veg: boolean,
    weight: number,
    unit: string
}

export interface IBurgerContent {
    burgerList: IProduct[],
    catalogTitle: string,
    getBurgers: () => void,
    getBurger: (id: number) => void
}
export interface IPizzaContent {
    pizzaList: IProduct[],
    catalogTitle: string,
    getPizzaList: () => void,
    getPizza: (id: number) => void
}
export interface IProductCartContent {
    isFetching: boolean,
    currentProduct: IProductDetails
}