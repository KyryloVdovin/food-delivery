import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../interfaces/food-interface';
import s from './burger-item.module.css';
import { useEffect, useRef, useState } from 'react';

const ProductItem = ({ id, name, img, price, weight, unit, catalogTitle, clickedItemId, getProduct, setClickedItemId }: IProduct) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/${catalogTitle}/product/${name.trim()}`);

    const requestProductData = () => {
        getProduct(catalogTitle.toLocaleLowerCase(), id);
        handleClick();

        setClickedItemId(id);
    }

    const scrollToElement = () => {
        setTimeout(function () {
            const element = document.getElementById(`catalog_item-${clickedItemId}`);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    function onEntry(entries: any) {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    let options = {
        threshold: [0.1]
    };

    useEffect(() => {
        scrollToElement();

        let observer = new IntersectionObserver(onEntry, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);

            return () => {
                if (containerRef.current) observer.unobserve(containerRef.current);
            }
        }
    }, [containerRef, options]);

    return (
        <li ref={containerRef} id={`catalog_item-${id}`} className={`catalog_item ${isVisible ? s.elementShow : s.elementAnimation}`}>
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