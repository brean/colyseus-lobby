import React, { Component } from 'react';
import { Client } from 'colyseus.js';
import AppData from '../AppData';

import {
  TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, 
  TopAppBarFixedAdjust } from '@rmwc/top-app-bar';

class RoomState {
  roomName: string
  player: number

  constructor(roomName: string, player: number) {
    this.roomName = roomName
    this.player = player;
  }
}

class JoinedRoom extends Component<{ appData: AppData, match: any }, RoomState> {

  constructor(props: { appData: AppData, match: any }) {
    super(props);
    this.state = new RoomState("", 0);
  }

  componentDidMount() {
    let client: Client = this.props.appData.client;
    let appData: AppData = this.props.appData;
    if (appData.currentMeta) {
      this.setState({roomName: appData.currentMeta.name});
      return;
    }
    client.getAvailableRooms().then(rooms => {
      rooms.forEach((room) => {
        if (room.roomId === this.props.match.params.roomId) {
          this.setState({roomName: room.metadata.name});
        }
      });
    });
    client.joinById(this.props.match.params.roomId).then(room => {
      // TODO: only when the room did not just get created
      // get session id from client?
      this.forceUpdate();
      return true;
    }).catch((msg: string) => {
      console.log(msg);
      
      this.props.appData.history.push('/');
    })

  }

  render() {
    return (
      <>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>{this.state.roomName}</TopAppBarTitle>
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

export { JoinedRoom };