import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    /* @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR'); */
    body {
        /* font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 18px;
        background-color: #F6F6F6;
        word-break: keep-all;
        line-height: normal;
        width: 100vw;
        overflow-x: hidden;
    }
    body>*{
        width: 100vw;
    }
    /* 
    body::-webkit-scrollbar {
        width: 5px;
    }
    body::-webkit-scrollbar-track {
        display: none;
        background-color: #cfcfcf;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #84bfe6;
    } */
`;

export default globalStyles;
