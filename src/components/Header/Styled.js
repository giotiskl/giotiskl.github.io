import styled from 'styled-components';
import { palette } from '../../styles/variables';

export const Styled = styled.header`
  background: linear-gradient(to bottom, #52504b 0%, #3d3c38 100%);
  border-top: 1px solid #5C5B53;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: ${palette.white};
  display: flex;
  height: 26px;
  width: 100%;
  padding: 0 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  align-items: center;

  .Button {
    margin-right: 3px;

    &:last-child {
      margin-right: 15px;
    }
  }
`;
