import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Styled as StyledSection } from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import Typist from 'react-typist';
import classNames from 'classnames';

export class PS1 extends Component {
  state = {
    animationDone: false,
  };

  setAnimationDone = animationDone => this.setState({ animationDone });

  render() {
    const { animationDone } = this.state;
    const { command, node } = this.props;

    const commandClassnames = classNames('command', {
      done: animationDone,
    })

    return (
      <StyledSection animationDone={animationDone}>
        <div className="dir">~/workspace/yiotis-website</div>
        <div className="branch">
          <FontAwesomeIcon icon={faCodeBranch} /> master
        </div>
        <div className={commandClassnames}>
          <Typist
          avgTypingDelay={100}
            cursor={{ element: ' █' }}
            onTypingDone={() => this.setAnimationDone(true)}
          >
            {command}
          </Typist>
        </div>
        {animationDone && <div>{node}</div>}
      </StyledSection>
    );
  }
}

PS1.propTypes = {
  /**
   * Command to be typed using react-typist
   */
  command: PropTypes.string.isRequired,
  /**
   * Node to render after the animation is finished
   */
  node: PropTypes.node,
};

PS1.defaultProps = {
  node: null,
};
