export default class Game {
  name: string;
  mode: string;
  map: string;
  player_max: number;
  player_active: number;

  constructor(name: string, mode: string, map: string, pm: number, pa: number) {
    this.name = name;
    this.mode = mode;
    this.map = map;
    this.player_max = pm;
    this.player_active = pa;
  }
}