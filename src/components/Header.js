
import headerLogo from '../images/logo.svg';
import { useState, useEffect, Link } from 'react';


function Header({ currentRoute, userEmail, handleExit, loggedIn }) {

    const [headerInfo, setHeaderInfo] = useState({});

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
            <nav className="header__menu">
                {loggedIn ? <p className='header__email'>{userEmail}</p> : ''}
                <Link className="header__link">
                    to={headerInfo.link || ''}
                    onClick={headerInfo.name === "Выход" ? handleButtonExit : null}
                    {headerInfo.name}
                </Link>
            </nav>
        </header>
    )
}
export default Header;
