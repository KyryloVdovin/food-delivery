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

    return (
        <div className='product-cart'>
            <h2>{name}</h2>
            <img src={img} />
            <p>{desc}</p>
            <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
            </ul>
            <p>250</p>
            <div>
                <button onClick={handleClick}>close</button>
                <div>
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCart;