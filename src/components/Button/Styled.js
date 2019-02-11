import styled from 'styled-components';

export const Styled = styled.button`
  background-color: transparent;
  background: ${(props) => !props.secondary ? 'linear-gradient(to bottom, #ef8161 0%, #e64918 100%)' : 'linear-gradient(to bottom, #8a8a84 0%,#5e5954 100%)'};
  border: 1px solid ${(props) => !props.secondary ? '#82422E' : '#4B4944'};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  outline: 0 !important;
  position: relative;

  svg {
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: .5;
  }
`;
