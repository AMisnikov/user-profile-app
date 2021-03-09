import styled from 'styled-components';

export const ContactItemEl = styled.li`
    display: flex;
    align-items: center;
    padding: 2rem 0;

    @media only screen and (max-width: 900px) {
        flex-wrap: wrap;
    }
`;

export const ContactItemType = styled.span`
    margin-right: 2rem;
    flex: 0 0 200px;

    @media only screen and (max-width: 900px) {
        flex: 1 1 100%;
        margin-right: 0;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const ContactItemValue = styled.span`
    margin-right: 2rem;
    text-overflow: ellipsis;

    @media only screen and (max-width: 900px) {
        margin-right: 0;
        flex: 1 1 100%;
        width: 100%;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const ContactItemBtn = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    outline: none;
    transition: all .2s;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const ContactItemBtnEdit = styled(ContactItemBtn)`
    margin-left: auto;
    margin-right: 1rem;

    svg {
        fill: #000;
    }

    &:focus {
        border-color: #000;
    }
`;

export const ContactItemBtnDelete = styled(ContactItemBtn)`
    @media only screen and (max-width: 900px)  {
        margin-right: auto;
    }
    
    svg {
        fill: #eb4034;
    }

    &:focus {
        border-color: #eb4034;
    }
`;