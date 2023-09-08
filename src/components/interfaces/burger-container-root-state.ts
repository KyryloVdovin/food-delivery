import { IProduct, IProductDetails } from "../../interfaces/food-interface"

export interface IBurgerRootState extends IProductCartRootState {
    burgersPage: {
        burgerList: [IProduct],
        catalogTitle: string,
        currentProduct: IProductDetails,
        isFetching: boolean
    }
}
export interface IPizzaRootState extends IProductCartRootState{
    pizzaPage: {
        pizzaList: [IProduct],
        catalogTitle: string,
        currentProduct: IProductDetails,
        isFetching: boolean
    }
}
export interface IProductCartRootState {
    productCartPage: {
        currentProduct: IProductDetails,
        isFetching: boolean
    }
}