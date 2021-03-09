import React from 'react';
import { LoginPageContainer, LoginPageWrapper } from './LoginPage.styles.jsx';
import { HeadingPrimary } from '../../components/HeadingPrimary/HeadingPrimary.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';





const LoginPage = () => (
    <LoginPageContainer>
        <LoginPageWrapper>
            <HeadingPrimary>Войдите в систему</HeadingPrimary>
            <LoginForm />  
        </LoginPageWrapper>
    </LoginPageContainer>
);

export default LoginPage;