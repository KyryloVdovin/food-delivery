import { useEffect } from 'react';
import BurgerItem from '../burger/burger-item';
import { IPizzaContent } from '../../interfaces/food-interface';
import '../burger/burger-content.css';
import CatalogTitle from '../general-conponents/catalog-title';
import Loading from '../loading/loading';

const PizzaContent = ({ pizzaList, catalogTitle, isFetching, getPizzaList, getProduct }: IPizzaContent) => {
    useEffect(() => {
        getPizzaList();
    }, []);

    const foodList = pizzaList.map(item => {
        return <BurgerItem key={item.id} id={item.id} name={item.name} img={item.img}
            price={item.price} weight={item.weight} unit={item.unit} catalogTitle={catalogTitle}
            getProduct={getProduct} />
    });

    return (
        <div className="catalog_wrap_list">
            <CatalogTitle catalogTitle={catalogTitle}/>
            {isFetching && <Loading />}
            <ul className="catalog_list">
                {!isFetching && foodList}
            </ul>
        </div>
    )
}

export default PizzaContent;