import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Styled as StyledSection } from './Styled';
import { JobEntry } from '../JobEntry';

const propTypes = {};

export const Resume = props => {
  return (
    <StyledSection>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Resume</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <JobEntry
              description="blabla"
              employer="COMATCH GmbH"
              jobTitle="JavaScript Developer"
              location="Berlin, Germany"
              fromTo="NOV 2017 - PRESENT"
            />
            <JobEntry
              description="blabla"
              employer="SI Labs GmbH"
              jobTitle="Fullstack Developer"
              location="Berlin, Germany"
              fromTo="DEC 2016 - NOV 2017"
            />
            <JobEntry
              description="blabla"
              employer="Getsurance GmbH"
              jobTitle="Frontend Developer"
              location="Berlin, Germany"
              fromTo="JUN 2016 - DEC 2016"
            />
          </Col>
        </Row>
      </Grid>
    </StyledSection>
  );
};

Resume.propTypes = propTypes;
