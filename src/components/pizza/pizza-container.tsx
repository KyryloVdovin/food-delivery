import PizzaContent from './pizza-content';
import { connect } from "react-redux";
import { IPizzaRootState } from '../interfaces/burger-container-root-state';
import { getPizzaList, setClickedItemId } from '../redux/pizza-reducer';
import { getProduct } from '../redux/product-cart-reducer';

const mapStateToProps = (state: IPizzaRootState) => {
    return {
        pizzaList: state.pizzaPage.pizzaList,
        catalogTitle: state.pizzaPage.catalogTitle,
        currentProduct: state.pizzaPage.currentProduct,
        isFetching: state.pizzaPage.isFetching
    }
}

const PizzaContainer = connect(mapStateToProps, { getPizzaList, getProduct, setClickedItemId })(PizzaContent);

export default PizzaContainer;