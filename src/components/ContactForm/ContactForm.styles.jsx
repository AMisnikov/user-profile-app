import styled from 'styled-components';

 
export const ContactFormContainer = styled.div`
    background-color: #fff;
    box-shadow: 0px .4rem 1rem rgba(0, 0, 0, 0.1);
    padding: 2rem;
`;

export const ContactFormRow = styled.div`
    display: flex;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    input,
    select {
        height: 4.8rem;
    }

    & > *:not(:last-child) {
        margin-right: 2rem;

        @media only screen and (max-width: 900px) {
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }

`;

export const ContactFormActions = styled(ContactFormRow)`
    justify-content: center;

    button {
        min-width: 14rem;
        position: relative;
    }
`;

export const ContactFormType = styled.div`
    flex: 0 0 25rem;

    @media only screen and (max-width: 900px) {
        flex-basis: auto;
        width: 100%;
    }
`;

export const ContactFormValue = styled.div`
    flex: 1 1 100%;

    @media only screen and (max-width: 900px) {
    flex-basis: auto;
    width: 100%;
    }

    input {
    text-overflow: ellipsis;
    }
`;

