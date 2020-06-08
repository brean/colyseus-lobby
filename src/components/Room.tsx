import React, { Component } from 'react';

import {
  TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, 
  TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

class Room extends Component {
  render() {
    return (
      <>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>New Game</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </>
    );
  }
}

export { Room };