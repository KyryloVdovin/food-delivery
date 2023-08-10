import BurgerContent from './burger-content';
import { connect } from "react-redux";
import IBurgerRootState from '../interfaces/burger-container-root-state';

const mapStateToProps = (state: IBurgerRootState) => {
    return {
        burgerList: state.burgersPage.burgerList,
        catalogTitle: state.burgersPage.catalogTitle
    }
}

const BurgerContainer = connect(mapStateToProps, {})(BurgerContent);

export default BurgerContainer;