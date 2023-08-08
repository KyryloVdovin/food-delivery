import BurgerContent from './burger-content';
import { connect } from "react-redux";
interface rootState {
    food: 5
}
const mapDidpatchToProps = (state: rootState) => {
    return {
        food: state.food
    }
}

const BurgerContainer = connect(mapDidpatchToProps, {})(BurgerContent);

export default BurgerContainer;