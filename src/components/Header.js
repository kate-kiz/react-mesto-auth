
import headerLogo from '../images/logo.svg';
import { useState, useEffect } from 'react';
import { Link, useLocation, Route, Routes } from 'react-router-dom';

//handleRegister, loggedIn
function Header({ userEmail, handleExit }) {

    const [headerInfo, setHeaderInfo] = useState({});

    const currentRoute = useLocation();

    function handleButtonExit() {
        handleExit();
    }


    useEffect(() => {
        switch (currentRoute) {
            case "/":
                setHeaderInfo({
                    name: 'Выход',
                    link: '/sign-in'
                })
                break
            case "/sign-up":
                setHeaderInfo({
                    name: 'Вход',
                    link: 'sign-in'
                })
                break
            case "/sign-in":
                setHeaderInfo({
                    name: 'Регистрация',
                    link: '/sign-up'
                })
                break
            default:
                setHeaderInfo({
                    name: '',
                    link: '/'
                })
                break
        }
    }, [currentRoute])

    // loggedIn = true
    // email = "email@test.test"

    return (
        <header className="header">
            <img
                src={headerLogo}
                alt="Логотип Место."
                className="header__logo" />

            {/* <nav className="header__menu">
                {loggedIn ? <p className='header__email'>{userEmail}</p> : ''} */}
            {/* <Link className="header__link">
                    to={headerInfo.link || ''}
                    onClick={headerInfo.name === "Выход" ? handleButtonExit : null}
                    onClick={handleHeaderLinkClick}
                    {headerInfo.name}
                </Link> */}
            <Routes>
                <Route path='/' element={(
                    <div className='header__container'>
                        <p className='header__paragraph'>{`${userEmail}`}</p>
                        <button
                            type="button"
                            className="header__button"
                            onClick={handleButtonExit}
                        >
                            Выйти
                        </button>
                    </div>
                )} />
                <Route path='/sign-up' element={(<><Link to='/sign-in' className="header__link">Войти</Link></>)} />
                <Route path='/sign-in' element={(<><Link to='/sign-up' className="header__link">Регистрация</Link></>)} />
            </ Routes>
            {/* </nav> */}
        </header>
    )
}
export default Header;
