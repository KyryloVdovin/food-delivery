import BurgerContent from './burger-content';
import { connect } from "react-redux";
import IBurgerRootState from '../interfaces/burger-container-root-state';

const mapStateToProps = (state: IBurgerRootState) => {
    return {
        food: state.burgersContent.food
    }
}

const BurgerContainer = connect(mapStateToProps, {})(BurgerContent);

export default BurgerContainer;