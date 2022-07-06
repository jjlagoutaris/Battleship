import './style.scss';
import { Ship } from './Ship';
import { Gameboard } from './Gameboard';
import { Player } from './Player';

function getPlayerName(){
  let name = 'Default';
  let modal = document.getElementById('nameModal');
  modal.showModal();
  // close Modal
  document.querySelector('.nameModalCancelBtn').addEventListener('click', () => {
    modal.close();
  });
  document.querySelector('.nameModalSubmitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    name = document.getElementById('enterPlayerName').value;
    modal.close();
  });
  return name;
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

function createPlayerGrid(playerGrid){
  for(let i = 0; i < 10; i++){
    let row = document.createElement('div');
    row.classList.add('row'); 
    for(let j = 0; j < 10; j++){
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = '24px';
      cell.style.height = '48px';
      row.appendChild(cell);
    }
    playerGrid.appendChild(row); 
  }
  return playerGrid;
}

function generateGame(){
  const p1grid = document.getElementById('p1Grid');
  const p2grid = document.getElementById('p2Grid');
  
  const p1CreatedGrid = createPlayerGrid(p1grid);
  const p1Header = document.createElement('p');
  p1Header.textContent = `Player 1 Grid`;

  const p2CreatedGrid = createPlayerGrid(p2grid);
  const p2Header = document.createElement('p');
  p2Header.textContent = `Player 2 Grid`;

  document.body.append(p1Header);
  document.body.append(p1CreatedGrid);
  document.body.append(p2Header);
  document.body.append(p2CreatedGrid);
}

function mainGameLoop(){

  const players = createPlayers();

  generateGame();

  // while(players.p1.oppBoard.outcome !== 'over' && players.p2.oppBoard.outcome !== 'over'){
  //   // run game
  // }

}

mainGameLoop();