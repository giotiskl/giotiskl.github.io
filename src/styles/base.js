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

  h2 {
    margin: 0 0 20px 0;
    font-size: ${typography.lg};
    line-height: ${typography.hlLg};
    position: relative;

    &:after {
      background-color: ${palette.primary};
      content: '';
      display: block;
      width: 80px;
      height: 2px;
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  section {
    padding: 80px 0;
  }

  p {
    text-align: left;
  }
`;
