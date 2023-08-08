import './header.css';
import logo from '../../img/logo-white.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#!" className="logo">
                    <img className="logo-img" src={logo} alt="Invoriem logo" />
                </a>
                <div className="header_title-container">
                    <h1 className="header-title">
                        <p className="header_title-text">Только самые</p>
                        <p className="header_title-text header_title-text_red">сочные бургеры</p>
                    </h1>

                    <p className="header_title-red">
                        Бесплатная доставка от 400грн
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;