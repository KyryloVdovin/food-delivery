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
    getProduct: (category: string, id: number) => void
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
    isFetching: boolean,
    getBurgers: () => void,
    getProduct: (category: string, id: number) => void
}
export interface IPizzaContent {
    pizzaList: IProduct[],
    catalogTitle: string,
    isFetching: boolean,
    getPizzaList: () => void,
    getProduct: (category: string, id: number) => void
}
export interface IProductCartContent {
    isFetching: boolean,
    currentProduct: IProductDetails
}
export interface ICatalogTitle {
    catalogTitle: string
}