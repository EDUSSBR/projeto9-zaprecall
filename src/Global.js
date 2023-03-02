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

    @keyframes changeOpacity {
    0% {
      opacity: 0;
    }
    90%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes delayDisplay{
    0% {
        visibility:hidden;
        opacity: 1;
    }
    100% {
        opacity: 0;
      visibility:visible ;
    }
  }

`