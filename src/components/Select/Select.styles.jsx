import styled from 'styled-components';

export const SelectEl = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SelectLabel = styled.label`
    margin-bottom: 7px;
    font-size: 1.8rem;
    color: #000;
`;

export const SelectField = styled.select`
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