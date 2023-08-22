import PizzaContent from './pizza-content';
import { connect } from "react-redux";
import { IPizzaRootState } from '../interfaces/burger-container-root-state';
import { getPizzaList } from '../redux/pizza-reducer';
import { getProduct } from '../redux/product-cart-reducer';

const mapStateToProps = (state: IPizzaRootState) => {
    return {
        pizzaList: state.pizzaPage.pizzaList,
        catalogTitle: state.pizzaPage.catalogTitle,
        isFetching: state.pizzaPage.isFetching,
    }
}

const PizzaContainer = connect(mapStateToProps, { getPizzaList, getProduct })(PizzaContent);

export default PizzaContainer;