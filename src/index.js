import './style.scss';
import { Ship } from './Ship';
import { Gameboard } from './Gameboard';
import { Player } from './Player';

function getPlayerName(){
  // dom stuff here
  // return name
}

function createPlayers(){

  // get info to create players
  const p1Name = getPlayerName();
  const p1Board = Gameboard();
  const p2Name = 'Computer';
  const p2Board = Gameboard();
  // create players passing in p1Name
  const p1 = Player(p1Name, p1Board, p2Board);
  const p2 = Player(p2Name, p2Board, p1Board);
  // p1.oppBoard will be enemy gameboard
  return { p1, p2 };
}

function mainGameLoop(){

  const players = createPlayers();

  while(players.p1.oppBoard.outcome !== 'over' && players.p2.oppBoard.outcome !== 'over'){
    // run game
  }

}

// mainGameLoop();