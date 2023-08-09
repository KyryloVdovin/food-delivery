import React from 'react';
import BurgerItem from './burger-item';
import { IBurger } from '../../interfaces/food-interface';

interface rootState {
    burgerList: [IBurger]
}

const BurgerContent = ({burgerList}: rootState) => {
    return (
        <div className="catalog_wrap_list">
            <ul className="catalog_list">
                <BurgerItem />
            </ul>
        </div>
    )
}

export default BurgerContent;