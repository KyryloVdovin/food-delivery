import { IBurger } from "../../interfaces/food-interface"

export default interface IBurgerRootState {
    burgersPage: {
        burgerList: [IBurger],
        catalogTitle: string
    }
}