import styled from 'styled-components';

export const StyledLoginForm = styled.form`
     width: 100%;
    display: flex;
    flex-direction: column;


    & > *:not(:last-child) {
        margin-bottom: 30px;
    }
`;