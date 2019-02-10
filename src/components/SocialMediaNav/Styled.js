import styled from "styled-components";
import { palette, typography } from "../../styles/variables";

export const Styled = styled.ul`
  display: block;
  list-style: none;
  margin-top: 50px;

  li {
    display: inline-block;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }

    a {
      background-color: transparent;
      border: 2px solid;
      border-color:  ${palette.white};
      border-radius: 50%;
      color: ${palette.white} !important;
      display: block;
      padding:  10px 12px;
      transition: border 250ms ease-out, background-color 250ms ease-out;

      &.facebook:hover {
        background-color: ${palette.fb};
        border-color: ${palette.fb};
      }

      &.linkedin:hover {
        background-color: ${palette.linkedIn};
        border-color: ${palette.linkedIn};
      }

      &.github:hover {
        background-color: ${palette.github};
        border-color: ${palette.github};
      }

      &.email:hover {
        background-color: ${palette.secondary};
        border-color: ${palette.secondary};
      }
    }

    svg {
      font-size: ${typography.md};
    }
  }
`;
