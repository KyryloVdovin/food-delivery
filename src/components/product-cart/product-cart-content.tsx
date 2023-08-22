import { IProductCartContent } from '../../interfaces/food-interface';
import ProductCart from "./product-cart";
import Loading from '../loading/loading';

const ProductContent = ({ isFetching, currentProduct }: IProductCartContent) => {
    // let id = 0, name, desc, img, ingredients, price, veg, weight, unit;

    // if (currentProduct) {
    //     ({ id, name, desc, img, ingredients, price, veg, weight, unit } = currentProduct);
    // }

    return (
        <>
            {isFetching && <Loading />}

            {!isFetching && currentProduct && <ProductCart key={currentProduct.id} id={currentProduct.id} name={currentProduct.name}
                desc={currentProduct.desc} img={currentProduct.img} ingredients={currentProduct.ingredients}
                price={currentProduct.price} veg={currentProduct.veg} weight={currentProduct.weight} unit={currentProduct.unit} />}
        </>
    )
}

export default ProductContent;