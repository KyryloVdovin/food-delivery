import axios from "axios";

const foodApiInstance = axios.create({
    baseURL: 'https://apimocha.com/kirill-food-delivery/'
});

export const foodAPI = {
    getBurgers() {
        return foodApiInstance('burgers').then(response => {
            return response;
        })
    },
    getBurger(burgerId: number) {
        return foodApiInstance(`burgers/${burgerId}`).then(response => {
            return response;
        })
    },
    getPizza() {
        return foodApiInstance('pizza').then(response => {
            return response;
        })
    },
}