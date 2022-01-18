import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
        background: #F7F8F9;
        text-rendering: optimizeLegibility;
    }

    html, body, #root {
        overflow: auto;
    }
`