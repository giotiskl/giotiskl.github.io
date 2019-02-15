import styled from 'styled-components';

export const Styled = styled.nav`
  background-color: #f2f1f0;
  display: flex;

  .Link {
    background: linear-gradient(to bottom, #edeceb 0%, #dad8d5 100%);
    border-color: #c3c0bc;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-left: 1px solid;
    border-top: 1px solid;
    border-right: 1px solid;
    color: #6f606a !important;
    flex: 1 0 auto;
    display: inline-block;
    margin-top: 3px;
    padding: 8px 10px;
    text-decoration: none !important;

    &.active {
      background: linear-gradient(to bottom, #fffffe 0%, #f7f6f6 100%);
      margin-top: 0;
    }
  }

  .Link ~ .Link {
    margin-left: 2px;
  }
`;
