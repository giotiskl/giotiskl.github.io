import React from 'react';
import PropTypes from 'prop-types';
import { Styled as StyledButton } from './Styled';

export const Button = ({ icon, secondary }) => {
  return (
    <StyledButton className="Button" type="button" secondary={secondary}>
      {icon}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * FontAwesome icon
   */
  icon: PropTypes.node.isRequired,
  /**
   * Stylistic variation
   */
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
};
