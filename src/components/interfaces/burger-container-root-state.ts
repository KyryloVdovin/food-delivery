import { IProduct, IProductDetails } from "../../interfaces/food-interface"

export interface IBurgerRootState extends IProductCartRootState {
    burgersPage: {
        burgerList: [IProduct],
        catalogTitle: string,
        currentProduct: IProductDetails,
        isFetching: boolean
    }
}
export interface IPizzaRootState {
    pizzaPage: {
        pizzaList: [IProduct],
        catalogTitle: string
    }
}
export interface IProductCartRootState {
    burgersPage: {
        currentProduct: IProductDetails,
        isFetching: boolean
    }
}