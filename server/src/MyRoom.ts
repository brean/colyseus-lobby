import http from "http";
import { Room, Client } from "colyseus";

// Rename to something-game
export class MyRoom extends Room {
    options: any;
    // When room is initialized
    onCreate (options: any) { 
      console.log(options);
      this.setMetadata(options);
    }

    // When client successfully join the room
    onJoin (client: Client, options: any, auth: any) {}

    // When a client leaves the room
    onLeave (client: Client, consented: boolean) { }

    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    onDispose() {}

    onMessage() {}
}