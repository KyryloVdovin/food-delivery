import { useNavigate } from 'react-router-dom';

import { IProduct } from '../../interfaces/food-interface';
import s from './burger-item.module.css';

const ProductItem = ({ id, name, img, price, weight, unit, catalogTitle, getProduct }: IProduct) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/${catalogTitle}/product/${name.trim()}`);
// console.log(catalogTitle);
    const requestProductData = () => {
        getProduct(catalogTitle.toLocaleLowerCase(), id);
        handleClick();
    }

    return (
        <li id={`catalog_item-${id}`} className={`catalog_item`}>
            <article className={`${s.product}`} >
                <img src={img} alt="product image" className={`${s.productImg}`} />
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
                <button className={s.productAdd} onClick={requestProductData}>
                    Add
                </button>
            </article>
        </li>
    )
}

export default ProductItem;