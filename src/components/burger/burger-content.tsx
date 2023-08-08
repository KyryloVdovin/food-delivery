import React from 'react';
import BurgerItem from './burger-item';

interface rootState {
    food: 5
}

const BurgerContent = ({food}: rootState) => {
    return (
        <div className="catalog_wrap_list">
            <ul className="catalog_list">
                <BurgerItem />
            </ul>
        </div>
    )
}

export default BurgerContent;