import styled from 'styled-components';
import { palette, typography } from '../../styles/variables';

export const Styled = styled.div`
  padding-left: 40px;
  position: relative;
  text-align: left;

  p {
    margin-bottom: 0;
  }

  .from-to,
  .job-title {
    margin: 0 0 5px 0;
  }

  .location,
  .employer {
    margin: 0 0 10px 0;
  }

  .job-title {
    font-size: ${typography.md};
    line-height: ${typography.lhMd};
    font-weight: bold;
  }

  .location,
  .from-to {
    color: rgba(0, 0, 0, 0.75);
    font-size: ${typography.xs};
    line-height: ${typography.lhXs};
  }

  // line
  &:before {
    background-color: ${palette.primary};
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  &:after {
    background-color: ${palette.white};
    border: 1px solid ${palette.primary};
    border-radius: 50%;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 250ms ease-out;
  }

  // Activate entry on hover
  &:hover:after {
    background-color: ${palette.primary};
  }

  // Spacing between entries
  & ~ & {
    padding-top: 40px;

    &:after {
      margin-top: 40px;
    }
  }
`;
