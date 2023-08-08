import NavigationItem from './navigation-item';
import './navigation.css';
import { navigationItemsData } from './nav-items-data';

const Navifation = (props) => {
    const navItems = navigationItemsData.map(item => {
        return <NavigationItem key={item.id} title={item.title} goTo={item.goTo} img={item.img}/>
    });

    return (
        <nav className="navigation">
            <div className="container navigation_container">
                <ul className="navigation_list">
                    {navItems}
                </ul>
            </div>
        </nav>
    )
}

export default Navifation;