import BurgerContent from './burger-content';
import { connect } from "react-redux";
import IBurgerRootState from '../interfaces/burger-container-root-state';
import { getBurgers } from '../redux/burger-reducer';

const mapStateToProps = (state: IBurgerRootState) => {
    return {
        burgerList: state.burgersPage.burgerList,
        catalogTitle: state.burgersPage.catalogTitle
    }
}

const BurgerContainer = connect(mapStateToProps, {getBurgers})(BurgerContent);

export default BurgerContainer;