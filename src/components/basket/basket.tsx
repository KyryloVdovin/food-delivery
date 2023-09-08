import { useNavigate, useLocation } from 'react-router-dom';
import { IProduct } from '../../interfaces/food-interface';
import './basket.css';
import ItemInBasket from './item-in-basket';
import { useState } from 'react';

const Basket = ({ }) => {
    const [catalogOrderOpened, setCatalogOrderOpened] = useState(false);

    const openCatalogOrder = () => {
        setCatalogOrderOpened(true);
    }

    const closeCatalogOrder = () => {
        setCatalogOrderOpened(false);
    }

    return (
        <>
            <div className={`catalog_order order`}>
                <aside className='order-wrapper' >
                    <div onClick={openCatalogOrder}>
                        <div className={`${catalogOrderOpened && 'order_wrap-title'} order_wrap-flex`}>
                            <h2 className="order_title">Корзина</h2>
                            <span className="order_count">4</span>
                        </div>
                        {catalogOrderOpened && <div>
                            <div className='order_wrap-list'>
                                <div className='order_list'>
                                    <ItemInBasket />
                                    <ItemInBasket />
                                    <ItemInBasket />
                                </div>
                            </div>
                            <div className='total-price'>
                                <div className='total-price-text'>Итого</div>
                                <div className='total-price-text'>120</div>
                            </div>
                            <button className="submit-order-btn">Оформить заказ</button>
                        </div>}
                    </div>
                    {catalogOrderOpened && <div className='bottom-section'>
                        <div>Free delivery</div>
                        <div>
                            <div className="close-backet" onClick={closeCatalogOrder}>Свернуть</div>
                        </div>
                    </div>}
                </aside>
            </div>
        </>
    )
}

export default Basket;