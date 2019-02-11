import styled from 'styled-components';
import { palette } from '../../styles/variables';

export const Styled = styled.section`
  background-color: #0a2833;
  padding-top: 10px;

  p {
    color: ${palette.white};
    padding-left: 5px;
  }

  ul {
    list-style: none;
    padding: 0 0 0 10px;

    a {
      color: ${palette.white};

      &:hover {
        background-color: ${palette.white};
        color: #0a2833;
        padding: 0 3px;
      }
    }
  }
`;
