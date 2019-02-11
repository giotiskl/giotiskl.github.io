import { createGlobalStyle } from "styled-components";
import { palette, typography } from './variables';

export const GlobalStyles = createGlobalStyle`
  *,
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    // copy text
    font-size: ${typography.sm};
    line-height: ${typography.lhSm};
  }
`;
