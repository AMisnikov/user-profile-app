import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Button = styled.button`
    display: inline-block;
    padding: 14px 20px;
    font-size: 16px;
    background: none;
    background-color: ${({color}) => color ? color : '#fff'};
    color: ${({textColor}) => textColor ? textColor : '#000'};
    outline: none;
    border: ${ ({color}) => color ? `1px solid ${color}` : '1px solid #000' };
    border-radius: 0;
    cursor: pointer;
    font-weight: 500;
    transition: all .2s;
    text-transform: uppercase;

    &:hover,
    &:focus,
    &:active {
        background-color: ${ ({color}) => color ? `${lighten(0.2, color)}` : `${darken(0.2, '#fff')}` };
        border-color: ${ ({color}) => color ? `${lighten(0.2, color)}` : '#000' };
    }

    &:focus {
        outline: ${({color}) => color ? `2px solid ${color}` : '2px solid #000'};
    }

    ${({disabled}) => disabled ? (`
        cursor: not-allowed;
        background-color: ${lighten(0.5, '#000')};
        border-color: ${lighten(0.5, '#000')};

        &:hover,
        &:focus,
        &:active {
            background-color: ${lighten(0.5, '#000')};
            border-color: ${lighten(0.5, '#000')};
        }
    `) : '' }

`; 



