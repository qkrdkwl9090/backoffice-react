import { createGlobalStyle } from "styled-components"; 
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-size:12px;
        background:linear-gradient(to bottom, rgb(36,44,57), rgb(26,30,39));    
        color:white;
        padding-left: 230px;
    }
    ul{
        list-style:none;
    }
`;
export default globalStyles;