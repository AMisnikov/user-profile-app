import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

import './_login-page.scss';


const LoginPage = () => (
    <div className="login-page">
        <div className="login-page__wrapper">
            <h1 className="heading-primary">Войдите в систему</h1>
            <LoginForm />  
        </div>
    </div>
);

export default LoginPage;