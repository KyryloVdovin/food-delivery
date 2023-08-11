import { useEffect } from 'react';
import BurgerItem from '../burger/burger-item';
import { IPizzaContent } from '../../interfaces/food-interface';
import '../burger/burger-content.css';

const PizzaContent = ({ pizzaList, catalogTitle, getPizzaList, getPizza }: IPizzaContent) => {
    useEffect(() => {
        getPizzaList();
    }, []);

    const foodList = pizzaList.map(item => {
        return <BurgerItem key={item.id} id={item.id} name={item.name} img={item.img}
        price={item.price} weight={item.weight} unit={item.unit} catalogTitle={catalogTitle}
        getProduct={getPizza}/>
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

export default PizzaContent;