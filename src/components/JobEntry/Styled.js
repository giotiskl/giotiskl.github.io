import styled from 'styled-components';
import { typography } from '../../styles/variables';

export const Styled = styled.div`
  text-align: left;

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
    color: rgba(0,0,0,.75);
    font-size: ${typography.xs};
    line-height: ${typography.lhXs};
  }

  & ~ & {
    margin-top: 40px;
  }
`;
