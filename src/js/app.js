/* eslint-disable no-unused-vars */
import Board from './Board';
import GameController from './GameController';
import GameState from './GameState';

const fields = Array.from(document.querySelectorAll('.field'));

const gameContorler = new GameController(fields);
gameContorler.start();

const board = new Board(fields);
const state = new GameState();
console.log(board);
console.log(state);
console.log(gameContorler);
// const board = new Board(fields);

// document.addEventListener('DOMContentLoaded', () => {
//   const interval = setInterval(() => {
//     board.deleteActiveClass();
//     board.addActiveClass();
//   }, 1000);
// });
