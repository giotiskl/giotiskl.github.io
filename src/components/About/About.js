import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import yiotisImg from "./img/yiotis_bangkok.jpg";
import { Styled as StyledSection } from "./Styled";

export const About = props => {
  return (
    <StyledSection>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>About me</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={4}>
            <img src={yiotisImg} alt="Yiotis in Bangkok" />
          </Col>
          <Col xs={12} sm={8}>
            <p>
              Hello, I am <strong>Yiotis Kaltsikis</strong>. A professional
              software developer, living and working in{" "}
              <strong>Berlin, Germany.</strong>
            </p>
            <p>
              Over the last years I have worked on a multitude of commercial web
              applications, for a variety of high profile German businesses.
            </p>
            <p>
              I am specialized in{" "}
              <strong>full stack JavaScript development</strong>, working with
              technologies such as <strong>ReactJS</strong>,{" "}
              <strong>Redux</strong>, <strong>NodeJS</strong>,{" "}
              <strong>Express</strong>, <strong>MeteorJS</strong>,{" "}
              <strong>MongoDB</strong>, <strong>AWS</strong>,{" "}
              <strong>Docker</strong>, <strong>CircleCI</strong>.
            </p>
            <p>
              In my free time, I enjoy working on private projects or{" "}
              <strong>open source software</strong>, using JavaScript, as well
              as other programming languages.
            </p>
            <p>
              When I am not coding, you will find me playing the guitar,
              watching a good movie, reading a classic book, working out or
              planning my next trip :)
            </p>
          </Col>
        </Row>
      </Grid>
    </StyledSection>
  );
};

About.propTypes = {};
