import { createGlobalStyle } from "styled-components";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');
</style>
export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Recursive;
        src:  url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&family=Righteous&display=swap');
    }
    @font-face {
        font-family: Righteous;
        src:  url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
    }

    *{
        box-sizing:border-box;
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
    button{
        cursor: pointer;
    }
`