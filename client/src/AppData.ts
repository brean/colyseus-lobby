import { createHashHistory, History } from "history";

import { Client, Room } from 'colyseus.js';
import RoomMeta from "./RoomMeta";

class AppData {
  history: History<unknown>;
  client: Client;
  // currently joined room
  currentRoom?: Room;
  // metadata for the currently joined room
  currentMeta?: RoomMeta;

  constructor() {
    this.history = createHashHistory();
    const prot = window.location.protocol.replace("http", "ws")
    const endpoint = `${prot}//${window.location.hostname}:3001`;
    this.client = new Client(endpoint);
  }
}

export default AppData;