import React, { useEffect } from 'react';
import BurgerItem from './burger-item';
import { IBurgerContent } from '../../interfaces/food-interface';
import './burger-content.css';

const BurgerContent = ({ burgerList, catalogTitle, getBurgers, getBurger }: IBurgerContent) => {
    useEffect(() => {
        getBurgers();
    }, []);

    const foodList = burgerList.map(item => {
        return <BurgerItem key={item.id} id={item.id} name={item.name} img={item.img}
            price={item.price} weight={item.weight} unit={item.unit} catalogTitle={catalogTitle} 
            getProduct={getBurger}/>
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