import './navigation-item.css';
import { NavLink } from 'react-router-dom';
import steak from '../../img/icons/steak.png';
const NavigationItem = ({ title, goTo, img }) => {
    return (
        <li className='navigation_item'>
            <NavLink to={goTo} className={navData => navData.isActive
                ? "navigation_button_active navigation_button navigation_button_burger"
                : "navigation_button navigation_button_burger"}>
                <img src={img} />
                <span>{title}</span>
            </NavLink>
        </li>
    )
}

export default NavigationItem;