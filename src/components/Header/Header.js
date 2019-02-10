import React from "react";
import PropTypes from "prop-types";
import { Styled as StyledHeader } from "./Styled";
import { SocialMediaNav } from '../SocialMediaNav';

const propTypes = {};

export const Header = props => {
  return (
    <StyledHeader>
      <div className="titles">
        <h2>Yiotis Kaltsikis</h2>
        <h1>JavaScript Developer</h1>
        <SocialMediaNav />
      </div>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;
