import BurgerContent from './burger-content';
import { connect } from "react-redux";
import { IBurgerRootState } from '../interfaces/burger-container-root-state';
import { getBurgers, setClickedItemId } from '../redux/burger-reducer';
import { getProduct } from '../redux/product-cart-reducer';

const mapStateToProps = (state: IBurgerRootState) => {
    return {
        burgerList: state.burgersPage.burgerList,
        catalogTitle: state.burgersPage.catalogTitle,
        currentProduct: state.burgersPage.currentProduct,
        isFetching: state.burgersPage.isFetching
    }
}

const BurgerContainer = connect(mapStateToProps, { getBurgers, getProduct, setClickedItemId })(BurgerContent);

export default BurgerContainer;