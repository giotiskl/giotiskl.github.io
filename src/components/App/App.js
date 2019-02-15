import React, { Component } from 'react';
import { Styled as StyledMain } from './Styled';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { Terminal } from '../Terminal';

export class App extends Component {
  render() {
    return (
      <StyledMain className="App">
        <Header />
        <NavBar />
        <Terminal />
      </StyledMain>
    );
  }
}
