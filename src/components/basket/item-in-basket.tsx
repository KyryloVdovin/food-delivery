import './item-in-backet.css';
import ChangeItemsCount from '../general-conponents/change-items-count';

const ItemInBasket = ({ }) => {
    return (
        <>
            <div className={`item-in_basket`} >
                <div className='left-section'>
                    <div className='img'>
                        <img />
                    </div>
                    <div className='info'>
                        <p>Super Cheese</p>
                        <p>512g</p>
                        <p>550grn</p>
                    </div>
                </div>
                <div className='right-section'>
                    <ChangeItemsCount />
                </div>
            </div>
        </>
    )
}

export default ItemInBasket;