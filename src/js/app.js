/* eslint-disable no-unused-vars */
import GameController from './GameController';

const fields = Array.from(document.querySelectorAll('.field'));

const gameContorler = new GameController(fields);
gameContorler.start();
