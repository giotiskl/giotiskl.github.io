import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Styled as StyledUl } from "./Styled";

export const SocialMediaNav = props => {
  return (
    <StyledUl>
      <li>
        <a
          className="facebook"
          href="https://www.facebook.com/yiotiskal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/yiotis-kaltsikis-846013b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          className="github"
          href="https://www.github.com/giotiskl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          className="email"
          href="mailto:giotisgr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </StyledUl>
  );
};

SocialMediaNav.propTypes = {};
