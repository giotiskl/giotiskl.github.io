import React from "react";
import PropTypes from "prop-types";
import { Styled as StyledDiv } from "./Styled";

export const JobEntry = ({
  description,
  employer,
  fromTo,
  jobTitle,
  location
}) => {
  return (
    <StyledDiv className="JobEntry">
      <h3 className="job-title">{jobTitle}</h3>
      <div className="employer">{employer}</div>
      <div className="from-to">{fromTo}</div>
      <div className="location">{location}</div>
      <p className="description">{description}</p>
    </StyledDiv>
  );
};

JobEntry.propTypes = {
  description: PropTypes.string.isRequired,
  employer: PropTypes.string.isRequired,
  fromTo: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};
