import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${({errors}) => errors && errors.length > 0 ? `
        input {
            border-color: #eb4034 !important;
        }
    
    ` : '' }
`;

export const InputField = styled.input`
    padding: 1rem;
    font-size: 2rem;
    color: #000;
    border: 1px solid #dfdfdf;
    outline: none;
    transition: all .2s;

    &:focus {
        border-color: #000;
    }
`;

export const InputLabel = styled.label`
    order: -1;
    margin-bottom: 7px;
    font-size: 1.8rem;
    color: #000;
`;

export const InputErrors = styled.p`
    margin: 5px 0;
    color:  #eb4034;
`;