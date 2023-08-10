import { IProduct } from "../../interfaces/food-interface"

export default interface IBurgerRootState {
    burgersPage: {
        burgerList: [IProduct],
        catalogTitle: string
    }
}
export default interface IPizzaRootState {
    pizzaPage: {
        pizzaList: [IProduct],
        catalogTitle: string
    }
}