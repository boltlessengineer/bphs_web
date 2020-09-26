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
    }
`;

export default globalStyles;
