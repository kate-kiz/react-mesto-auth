
// import { useState } from "react";

// function Login({ onLogin }) {

//     const [formValues, setFormValues] = useState({ email: '', password: '' })

//     function handleChange(evt) {
//         const { name, value } = evt.target;
//         setFormValues({
//             ...formValues,
//             [name]: value
//         })
//     }

//     function handleSubmit(evt) {
//         evt.preventDefault();
//         const { email, password } = formValues;
//         onLogin(email, password);
//     }

//     return (
//         <div className='login entry-page'>

//             <h1 className='entry-page__title'>Вход</h1>
//             <form
//                 className='entry-page__form entry-page__form_login'
//                 onSubmit={handleSubmit}
//             >
//                 <input
//                     type="email"
//                     name='email'
//                     value={formValue.email}
//                     onChange={handleChange}
//                     className='entry-page__input entry-page__input_email'
//                     placeholder='Email'
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     value={formValue.password}
//                     onChange={handleChange}
//                     className='entry-page__input entry-page__input_password'
//                     placeholder='Пароль'
//                     required
//                 />
//                 <button
//                     disabled={onDisabled}
//                     type="submit"
//                     className='entry-page__submit'>
//                     Войти
//                 </button>
//             </form>


//         </div>
//     );

// }

// export default Login;

import AuthorizationPopup from "./AuthorizationPopup";

function Login({ onLogin }) {
    return (
        <AuthorizationPopup
            title='Вход'
            buttonText='Войти'
            linkText='Нет аккаунта? Создать'
            linkPath='/sign-up'
            onSubmit={onLogin}
        />
    )
}

export default Login;
