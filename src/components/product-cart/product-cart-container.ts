import ProductContent from "./product-cart-content";
import { connect } from "react-redux";
import { IProductCartRootState } from '../interfaces/burger-container-root-state';

const mapStateToProps = (state: IProductCartRootState) => {
    return {
        // id: state.burgersPage.currentProduct.id,
        // name: state.burgersPage.currentProduct.name,
        // img: state.burgersPage.currentProduct.img,
        // desc: state.burgersPage.currentProduct.desc,
        // ingredients: state.burgersPage.currentProduct.ingredients,
        // price: state.burgersPage.currentProduct.price,
        // weight: state.burgersPage.currentProduct.weight,
        // unit: state.burgersPage.currentProduct.unit,
        currentProduct: state.burgersPage.currentProduct,
        isFetching: state.burgersPage.isFetching
    }
}

const ProductCartContainer = connect(mapStateToProps, {})(ProductContent);

export default ProductCartContainer;