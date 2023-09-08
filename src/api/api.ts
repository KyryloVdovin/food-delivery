import axios from "axios";

const foodApiInstance = axios.create({
    // baseURL: 'https://apimocha.com/kirill-food-delivery/'
});

export const foodAPI = {
    getBurgers() {
        return foodApiInstance('burgers').then(response => {
            return response;
        })
    },
    getProduct(category: string, productId: number) {
        return foodApiInstance(`${category}/${productId}`).then(response => {
            return response;
        })
    },
    getPizzaList() {
        return foodApiInstance('pizza').then(response => {
            return response;
        })
    },
    // getPizza(pizzaId: number) {
    //     return foodApiInstance(`pizza/${pizzaId}`).then(response => {
    //         return response;
    //     })
    // },
}