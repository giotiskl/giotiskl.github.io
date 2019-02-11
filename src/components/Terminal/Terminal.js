import React from 'react';
import PropTypes from 'prop-types';
import { Styled as StyledSection } from './Styled';
import { PS1 } from '../PS1';

export const Terminal = props => {
  return (
    <StyledSection>
      <PS1
        command="echo $WELCOME_MESSAGE"
        node={
          <>
            <p>
              Welcome to my personal website, my name is Yiotis Kaltsikis. I am
              a software developer, living and working in Berlin, Germany.
            </p>
            <p>
              Over the last years, I have developed a multitude of web
              applications, working for startups and large corporations, mainly
              with JavaScript.
            </p>
            <p>
              My stack revolves around the JavaScript ecosystem, including
              React, Redux, Node, Meteor, Express, MongoDB, AWS, Docker.
            </p>
            <PS1
              command="cd ./get-in-touch/"
              node={
                <ul className="social-media-nav">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yiotis-kaltsikis-846013b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin/
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/giotiskl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github/
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:giotisgr@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      email/
                    </a>
                  </li>
                </ul>
              }
            />
          </>
        }
      />
    </StyledSection>
  );
};

Terminal.propTypes = {};
