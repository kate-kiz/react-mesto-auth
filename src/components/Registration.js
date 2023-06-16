
import AuthorizationPopup from "./AuthorizationPopup";

function Registration({ onRegister }) {

    return (
        <AuthorizationPopup
            title='Регистрация'
            buttonText='Зарегистрироваться'
            linkText='Уже зарегистрированы? Войти'
            linkPath='/sign-in'
            onSubmit={onRegister}
        />
    )
}

export default Registration; 
