import styled from 'styled-components';
import { palette } from '../../styles/variables';

export const Styled = styled.section`
  .dir {
    background-color: #2c85bf;
    color: #143841;
    padding: 0 10px;
    z-index: 1;
    &:after {
      background-color: #2c85bf;
    }
  }

  .branch {
    background-color: #7f9818;
    color: #143841;
    padding: 0 10px 0 20px;
    &:after {
      background-color: #7f9818;
    }
  }

  .dir,
  .branch {
    display: inline-block;
    position: relative;
    user-select: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 3.5px;
      right: -7px;
      height: 14px;
      width: 14px;
      transform: rotate(45deg);
    }
  }

  .command {
    color: ${palette.white};
    display: inline-block;
    padding-left: 20px;

    &.done {
      .Cursor {
        display: none;
      }
    }
  }
`;
