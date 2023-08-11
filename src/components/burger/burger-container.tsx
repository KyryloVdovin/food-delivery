import BurgerContent from './burger-content';
import { connect } from "react-redux";
import { IBurgerRootState } from '../interfaces/burger-container-root-state';
import { getBurgers, getBurger } from '../redux/burger-reducer';

const mapStateToProps = (state: IBurgerRootState) => {
    return {
        burgerList: state.burgersPage.burgerList,
        catalogTitle: state.burgersPage.catalogTitle,
        currentProduct: state.burgersPage.currentProduct
    }
}

const BurgerContainer = connect(mapStateToProps, { getBurgers, getBurger })(BurgerContent);

export default BurgerContainer;