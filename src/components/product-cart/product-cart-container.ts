import ProductContent from "./product-cart-content";
import { connect } from "react-redux";
import { IProductCartRootState } from '../interfaces/burger-container-root-state';

const mapStateToProps = (state: IProductCartRootState) => {
    return {
        currentProduct: state.productCartPage.currentProduct,
        isFetching: state.productCartPage.isFetching
    }
}

const ProductCartContainer = connect(mapStateToProps, {})(ProductContent);

export default ProductCartContainer;