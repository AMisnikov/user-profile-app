import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        color: #000;
        font-weight: 400;
        

    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    ::selection {
        background-color: #000;
        color: #fff;
    }

    * {
        -webkit-tap-highlight-color: transparent; 
    }


`;

export default GlobalStyles;