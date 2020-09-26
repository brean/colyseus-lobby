// Colyseus + Express
import { Server } from "colyseus";
import { createServer } from "http";
import express from "express";
import { MyRoom } from "./MyRoom";
const port = Number(process.env.port) || 3001;

const app = express();
app.use(express.json());


const gameServer = new Server({
  server: createServer(app)
});

gameServer.define("my_room", MyRoom);
gameServer.listen(port);
