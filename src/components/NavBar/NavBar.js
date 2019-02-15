import React, { Component } from 'react';
import { Styled as StyledNav } from './Styled';
import classNames from 'classnames';

const ROUTE_MAP = {
  HOME: 'HOME',
  PROJECTS: 'PROJECTS',
};

function getLinkText(text) {
  return `root@home-pc: ~/${text}`;
}

function getLinkClassnames(routeName, activeRoute) {
  return classNames('Link', {
    active: activeRoute === routeName,
  });
}

export class NavBar extends Component {
  state = {
    activeRoute: ROUTE_MAP.HOME,
  };

  setActiveRoute = activeRoute => () => this.setState({ activeRoute });

  render() {
    const { activeRoute } = this.state;

    return (
      <StyledNav>
        <a
          className={getLinkClassnames(ROUTE_MAP.HOME, activeRoute)}
          onClick={this.setActiveRoute(ROUTE_MAP.HOME)}
          href="#"
        >
          {getLinkText('Home')}
        </a>
        <a
          className={getLinkClassnames(ROUTE_MAP.PROJECTS, activeRoute)}
          onClick={this.setActiveRoute(ROUTE_MAP.PROJECTS)}
          href="#"
        >
          {getLinkText('Projects')}
        </a>
      </StyledNav>
    );
  }
}
