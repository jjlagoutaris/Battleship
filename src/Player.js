export function Player(name, board, oppBoard){

  const setPlayerName = (newName) => name = newName;
  const getPlayerName = () => name;

  function randomHit() {
    let min = 1;
    let randNum = Math.floor(Math.random() * (oppBoard.gridSize-min) + min);
    if(oppBoard.grid[randNum] == false){
      oppBoard.receiveAttack(randNum);
    } else{
      randomHit();
    }
  }

  return {
    setPlayerName, getPlayerName, board, oppBoard, randomHit
  };
}