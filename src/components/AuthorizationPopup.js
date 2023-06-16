
import { useRef, useState } from "react";

function AuthorizationPopup({ name, title, buttonText, onSubmit }) {
    const [email, setEmail] = useState('');
    // const passwordRef = useRef() , linkText, linkPath,;
    const [password, setPassword] = useState('');

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    // function handleSubmit(evt) {
    //     evt.preventDefault();
    //     onSubmit({
    //         email: email,
    //         password: passwordRef.current.value
    //     })
    // }

    const [emailTouch, setEmailTouch] = useState(false);
    const [passwordTouch, setPasswordTouch] = useState(false);

    function handleInputTouch(evt) {
        switch (evt.target.name) {
            case 'email':
                setEmailTouch(true)
                break
            case 'password':
                setPasswordTouch(true)
                break
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const data = {};
        data.email = email;
        data.password = password;
        onSubmit({ data });
    }

    return (
        <div className="auth">
            <h2 className="auth__title">{title}</h2>
            <form
                name={name}
                method="post"
                onSubmit={handleSubmit}>
                <div className="auth__section">
                    <input
                        placeholder="E-mail"
                        type="email"
                        id="email"
                        required
                        name="email"
                        className="auth__input"
                        onChange={handleEmailChange}
                        onBlur={(evt) => { handleInputTouch(evt) }}
                    />
                    <span className="auth__error" id="input-error-email" />
                </div>
                <div className="auth__section">
                    <input
                        placeholder="Пароль"
                        type="password"
                        id="password"
                        required
                        minLength="5" maxLength="20"
                        value={password || ''}
                        onChange={handlePasswordChange}
                        onBlur={(evt) => { handleInputTouch(evt) }}
                        className="auth__input"
                        name="password"
                    />
                    <span className="auth__error" id="input-error-password" />
                </div>
                <button
                    type="submit"
                    className="auth__button"
                >
                    {buttonText}
                </button>
                {/* <Link className="auth__link" to={linkPath}>{linkText}</Link> */}
            </form>
        </div>
    )
}

export default AuthorizationPopup;
