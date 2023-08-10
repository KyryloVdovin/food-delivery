import React from 'react';
import BurgerItem from './burger-item';
import { IBurgerContent } from '../../interfaces/food-interface';
import './burger-content.css';

const BurgerContent = ({ burgerList, catalogTitle }: IBurgerContent) => {
    const foodList = burgerList.map(item => {
        return <BurgerItem id={item.id} name={item.name} img={item.img}
        price={item.price} weight={item.weight} unit={item.unit}/>
    });

    return (
        <div className="catalog_wrap_list">
            <h2 className='catalog-title'>{catalogTitle}</h2>
            <ul className="catalog_list">
                {foodList}
            </ul>
        </div>
    )
}

export default BurgerContent;