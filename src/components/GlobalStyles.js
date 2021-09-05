import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
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
        background:white;    
        color:black;
        padding-left: 230px;

    }
    ul{
        list-style:none;
    }
`;
export default globalStyles;
