import React, { Component } from 'react';
import { Icon } from '@rmwc/icon';
import {
  TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, 
  TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import { Grid, GridCell } from '@rmwc/grid';
import { Card, CardPrimaryAction } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import Game from '../Game';

import '@rmwc/icon/styles';
import '@rmwc/top-app-bar/styles';
import '@rmwc/select/styles';
import '@rmwc/card/styles';
import '@rmwc/grid/styles';
import '@rmwc/typography/styles';

import { RoomCard } from './RoomCard';
import { RoomFilter } from './RoomFilter';
import { GAME_MODES, GAME_MAPS } from '../Settings';

type SelectedFilter = {
  game_modes: Map<string, boolean>;
  game_maps: Map<string, boolean>;
}

class RoomList extends Component<SelectedFilter, SelectedFilter> {
  toCard(game: Game) {
    return (<RoomCard game={game} />)
  }

  render() {
    let activeGames:Array<Game> = [
      new Game("Game #1", GAME_MODES[0], GAME_MAPS[0], 4, 1),
      new Game("Game #2", GAME_MODES[1], GAME_MAPS[1], 10, 1)
    ]

    let rows = [];
    for (let game of activeGames) {
      rows.push(this.toCard(game));
    }

    let game_maps: Map<string, boolean> = new Map<string, boolean>();
    for (let map of GAME_MAPS) {
      game_maps.set(map, true)
    }

    let game_modes: Map<string, boolean> = new Map<string, boolean>();
    for (let mode of GAME_MODES) {
      game_modes.set(mode, true);
    }

    return (
      <>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>Rooms</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
        
        <Grid>
          <GridCell span={12}>
            <RoomFilter game_modes={game_modes} game_maps={game_maps} />
          </GridCell>
        </Grid>
        
        <Grid>
          {rows}
          <GridCell span={2}>
            <Card>
              <CardPrimaryAction>
                <div style={{ padding: '0 1rem 1rem 1rem' }}>
                  <Typography use="headline6" tag="h2">
                    <Icon icon={{ 
                      icon: 'add_circle', 
                      strategy: 'ligature' }}></Icon> New Room
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
                    theme="textSecondaryOnBackground"
                  >
                  Touch/Click here to create a new room and start a new Game.
                  </Typography>
                </div>
              </CardPrimaryAction>
            </Card>
          </GridCell>
        </Grid>
      </>
    );
  }
}

export { RoomList };
