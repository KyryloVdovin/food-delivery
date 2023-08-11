import PizzaContent from './pizza-content';
import { connect } from "react-redux";
import { IPizzaRootState } from '../interfaces/burger-container-root-state';
import { getPizzaList, getPizza } from '../redux/pizza-reducer';

const mapStateToProps = (state: IPizzaRootState) => {
    return {
        pizzaList: state.pizzaPage.pizzaList,
        catalogTitle: state.pizzaPage.catalogTitle
    }
}

const PizzaContainer = connect(mapStateToProps, { getPizzaList, getPizza })(PizzaContent);

export default PizzaContainer;