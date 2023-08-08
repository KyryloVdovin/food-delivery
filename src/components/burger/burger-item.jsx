import burgerIcon from '../../img/cheese-burger.jpg';

const BurgerItem = (props) => {
    return (
        <li className="catalog_item">
            <article className="product">
                <img src={burgerIcon} alt="" className="product_img" />
                <p className="product_price">
                    689
                    <span className="currency">Грн</span>
                </p>
                <h3 className="product_title">
                    <button className="product_details">
                        Мясная бомба
                    </button>
                </h3>
                <p className="product_weight">520г</p>
                <button className="product_add">
                    Добавить
                </button>
            </article>
        </li>
    )
}

export default BurgerItem;