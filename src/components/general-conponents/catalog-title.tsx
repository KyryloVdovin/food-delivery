import { ICatalogTitle } from '../../interfaces/food-interface';
import './catalog-title.css';

const CatalogTitle = ({ catalogTitle}: ICatalogTitle) => {
    return (
        <>
            <h2 className='catalog-title'>{catalogTitle}</h2>
        </>
    )
}

export default CatalogTitle;