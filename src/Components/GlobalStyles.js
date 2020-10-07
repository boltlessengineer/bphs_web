import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
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
    body>*:not(.ct){
        width: 100vw;
    }
`;

export default globalStyles;
