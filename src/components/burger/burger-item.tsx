
import { IBurger } from '../../interfaces/food-interface';
import s from './burger-item.module.css';

const FoodItem = ({ name, img, price, weight, unit }: IBurger) => {
    return (
        <li className="catalog_item">
            <article className={s.product}>
                <img src={img} alt="product image" className={s.productImg} />
                <p className={s.producPrice}>
                    {price}
                    <span className="currency">$</span>
                </p>
                <h3 className={s.productTitle}>
                    <button className="product_details">
                        {name}
                    </button>
                </h3>
                <p className={s.productWeight}>{weight}{unit}</p>
                <button className={s.productAdd}>
                    Добавить
                </button>
            </article>
        </li>
    )
}

export default FoodItem;