import React, { Component } from 'react';
import { GridCell } from '@rmwc/grid';
import { Card, CardMedia, CardPrimaryAction } from '@rmwc/card';
import { Chip, ChipSet } from '@rmwc/chip';
import { Typography } from '@rmwc/typography';

import Game from '../Game';

import '@rmwc/grid/styles';
import '@rmwc/typography/styles';
import '@rmwc/card/styles';
import '@rmwc/chip/styles';

class RoomCard extends Component<{game: Game}>{

  render() {
    let game: Game = this.props.game;
    return (
      <GridCell span={2}>
        <Card>
          <CardPrimaryAction>
            <CardMedia
              sixteenByNine
              style={{
                backgroundImage: 'url(/maps/' + game.map + '.png)'
              }}
            />
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography use="headline6" tag="h2">
                { game.name }
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="textSecondaryOnBackground"
                style={{ marginTop: '-1rem' }}
              >
                { game.player_active }/{ game.player_max } player
              </Typography>
              <ChipSet>
                <Chip>{ game.mode }</Chip>
                <Chip>{ game.map }</Chip>
              </ChipSet>
            </div>
          </CardPrimaryAction>
        </Card>
      </GridCell>
    );
  }
}

export { RoomCard };