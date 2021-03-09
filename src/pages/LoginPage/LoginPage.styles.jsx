import styled from 'styled-components';

export const LoginPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url('/assets/img/login-back.jpg') no-repeat center;
    background-size: cover;
    padding: 1rem;
`;

export const LoginPageWrapper = styled.div`
    width: 100%;
    max-width: 50rem;
    background-color: #fff;
    box-shadow: 0px .4rem 1rem rgba(0, 0, 0, 0.1);
    padding: 4rem;

    @media (max-width: 500px) {
        padding: 1.5rem;
    }
`;