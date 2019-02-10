import styled from "styled-components";
import { palette, typography } from "../../styles/variables";
import bgImg from "./img/bg.jpg";

export const Styled = styled.header`
  background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.35)), url('${bgImg}') center center;
  box-shadow: inset 0 0.5rem 5rem rgba(0, 0, 0, 0.75);
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .titles {
    color: ${palette.white};

    h1 {
      font-size: ${typography.xl};
      line-height: ${typography.lhXl};
    }

    h2 {
      margin: 0;
      font-size: ${typography.lg};
      line-height: ${typography.lhLg};
    }
  }
`;
