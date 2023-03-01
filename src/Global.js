import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    html, body, #root{
        width:100%;
        height:100%;
    }
    button{
        cursor: pointer;
    }
`