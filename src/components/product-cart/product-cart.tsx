import { useNavigate, useParams } from 'react-router-dom';
import './product-cart.css';
import { IProductDetails } from '../../interfaces/food-interface';

const ProductCart = ({ id, name, img, desc, ingredients, price, weight, unit }: IProductDetails) => {
    const { title, category } = useParams();
    // console.log(id)
    const navigate = useNavigate();
    const handleClickScroll = () => {
        setTimeout(function () {
            const element = document.getElementById(`catalog_item-${id}`);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };
    const handleClick = () => {
        navigate(`/${category}`)
        handleClickScroll();
    }

    const ingredientList = ingredients.map(ing => {
        return <li>{ing.name}</li>
    });

    return (
        <div className='product-cart'>
            <h2>{name}</h2>
            <img src={img} />
            <p className='product-cart-desc'>{desc}</p>
            <p className='ingredients'>Ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p className='weight'>{weight}{unit}</p>
            <div className='btn-close-container'>
                <button className='btn-close' onClick={handleClick}></button>
            </div>
            <div className='buttons'>
                <button className='btn-add'>Add</button>
                <div className='plus-minus'>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>
            </div>
            <p className='price'>{price}$</p>
        </div>
    )
}

export default ProductCart;