
import { IProduct } from '../../interfaces/food-interface';
import s from './burger-item.module.css';

const ProductItem = ({ name, img, price, weight, unit }: IProduct) => {
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
                    Add
                </button>
            </article>
        </li>
    )
}

export default ProductItem;