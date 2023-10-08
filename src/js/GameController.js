import Board from './Board';
import GameState from './GameState';

// const fields = Array.from(document.querySelectorAll('.field'));

export default class GameController {
  constuctor(fields) {
    // this.fields = Array.from(document.querySelectorAll('.field'));
    this.board = new Board(fields);
    this.gamestate = new GameState();
  }

  start() {
    console.log(this);
  }
}
