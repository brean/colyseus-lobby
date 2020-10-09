import React, { Component } from 'react';
import { GridCell } from '@rmwc/grid';
import { Chip } from '@rmwc/chip';
import { Dialog, DialogTitle, DialogContent, DialogButton, DialogActions } from '@rmwc/dialog';
import { Card, CardMedia, CardPrimaryAction } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import Player from '../model/Player';
import { ChromePicker, ColorResult } from 'react-color';

import '@rmwc/grid/styles';
import '@rmwc/typography/styles';
import '@rmwc/card/styles';
import '@rmwc/chip/styles';
import '@rmwc/dialog/styles';
import AppData from '../model/AppData';

class PlayerCard extends Component<
  { appData: AppData, player: Player },
  { open: boolean, you: boolean }>{
  private oldColor: string

  constructor(props: { appData: AppData, player: Player }) {
    super(props);
    this.oldColor = props.player.color;
    const you: boolean = this.props.appData.currentRoom?.sessionId === props.player.id
    this.state = {open: false, you: you};
  }

  handleChange(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) {
    const player = this.props.player
    player.color = color.hex
    this.forceUpdate();
  }

  cardClick() {
    if (this.state.you) {
      this.setState({open: true, you: this.state.you})
    }
  }

  render() {
    const player = this.props.player
    const you = this.state.you ? (<Chip label="you" />) : ''
    const admin = this.props.player.admin ? (<Chip label="admin" style={{background: '#ff8888'}} />) : ''
    let dialog
    if (this.state.you) {
      dialog = (<Dialog
        open={this.state.open}
        onClose={evt => {
          console.log(evt.detail.action);
          if (evt.detail.action === 'close') {
            // reset color
            player.color = this.oldColor;
            this.forceUpdate()
          } else if (evt.detail.action === 'accept') {
            this.oldColor = player.color
            this.props.appData.currentRoom?.send(
              'change_color', player.color
            )
          }
          this.setState({open: false, you: this.state.you})
        }}
      >
        <DialogTitle>Player Properties</DialogTitle>
        <DialogContent>
          <ChromePicker 
            disableAlpha={true}
            color={ player.color }
            onChange={ this.handleChange.bind(this) } />
        </DialogContent>
        <DialogActions>
          <DialogButton action="close" >
            Cancel
          </DialogButton>
          <DialogButton action="accept" isDefaultAction>
            Save!
          </DialogButton>
        </DialogActions>
      </Dialog>)
    }
    return (
      <>
        {dialog}

        <GridCell span={2} key={player.id}>
          <Card onClick={this.cardClick.bind(this)}>
            <CardPrimaryAction>
              <CardMedia
                sixteenByNine
                style={{
                  backgroundColor: player.color
                }}
              />
              <div style={{ padding: '0 1rem 1rem 1rem' }}>
                <Typography use="headline6" tag="h2">
                  { player.name }
                </Typography>
                {you}{admin}
              </div>
            </CardPrimaryAction>
            
          </Card>
        </GridCell>
      </>
    );
  }
}

export { PlayerCard };