import BurgerContent from './burger-content';
import { connect } from "react-redux";
import { IBurgerRootState } from '../interfaces/burger-container-root-state';
import { getBurgers } from '../redux/burger-reducer';
import { getProduct } from '../redux/product-cart-reducer';

const mapStateToProps = (state: IBurgerRootState) => {
    return {
        burgerList: state.burgersPage.burgerList,
        catalogTitle: state.burgersPage.catalogTitle,
        isFetching: state.burgersPage.isFetching,
    }
}

const BurgerContainer = connect(mapStateToProps, { getBurgers, getProduct })(BurgerContent);

export default BurgerContainer;