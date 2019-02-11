import React from 'react';
import { Styled as StyledHeader } from './Styled';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';

export const Header = props => {
  return (
    <StyledHeader>
      <Button icon={<FontAwesomeIcon icon={faTimes} />} />
      <Button icon={<FontAwesomeIcon icon={faWindowMinimize} />} secondary />
      <Button icon={<FontAwesomeIcon icon={faSquare} />} secondary />
      root@home-pc: ~/workspace/yiotis-website
    </StyledHeader>
  );
};
