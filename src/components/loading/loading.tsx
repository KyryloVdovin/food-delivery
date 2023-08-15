import { useNavigate, useParams } from 'react-router-dom';
// import './product-cart.css';
import { IProductDetails } from '../../interfaces/food-interface';
import './loading.css';
interface Loading {

}
const Loading = ({ }: Loading) => {
    return (
        <div className='loader-container'>
            <div className='loader'></div>
        </div>
    )
}

export default Loading;