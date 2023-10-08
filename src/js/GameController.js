import Board from './Board';

export default class GameController {
  constructor(fields) {
    this.board = new Board(fields);
  }

  start() {
    this.board.moveGoblin();
  }
}
